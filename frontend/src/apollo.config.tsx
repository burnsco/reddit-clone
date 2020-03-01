import React from 'react'
import {
  ApolloClient,
  HttpLink,
  split,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import { WebSocketLink } from '@apollo/link-ws'
import { getMainDefinition } from '@apollo/client/utilities'

import App from './App'

const httpLink = new HttpLink({
  uri: 'http://localhost:4466/'
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4466/graphql`,
  options: {
    reconnect: true
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
})

const RedditApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default RedditApp
