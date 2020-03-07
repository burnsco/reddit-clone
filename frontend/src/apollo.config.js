import React from 'react'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'

import App from './App'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'include'
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
