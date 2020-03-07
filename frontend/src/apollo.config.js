import React from 'react'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import { setContext } from 'apollo-link-context'

import App from './App'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'same-origin'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

const RedditApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default RedditApp
