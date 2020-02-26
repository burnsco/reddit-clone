import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from '@apollo/react-hooks'

import './index.css'
import App from './App'

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: 'http://localhost:4000',
      credentials: 'same-origin'
    }),
    new WebSocketLink({
      uri: `ws://localhost:5000/`,
      options: {
        reconnect: true
      }
    })
  ]),
  cache: new InMemoryCache()
})

const Reddit = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<Reddit />, document.getElementById('root'))
