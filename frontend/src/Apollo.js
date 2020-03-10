import React from 'react'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import { WebSocketLink } from '@apollo/link-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import jwtDecode from 'jwt-decode'
import apolloLogger from 'apollo-link-logger'
import { onError } from 'apollo-link-error'
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
  ApolloProvider,
  split
} from '@apollo/client'
import App from './App'
import { getAccessToken, setAccessToken } from './context/access-token'

const httpLink = new HttpLink({
  uri: `http://localhost:4000/graphql`,
  credentials: 'include'
})

const wsLink = new WebSocketLink({
  uri: `ws:localhost:4000/subscriptions`,
  options: {
    reconnect: true
  }
})

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle
      Promise.resolve(operation)
        .then(operation => {
          const accessToken = getAccessToken()
          if (accessToken) {
            operation.setContext({
              headers: {
                authorization: `bearer ${accessToken}`
              }
            })
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          })
        })
        .catch(observer.error.bind(observer))

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

const refreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const token = getAccessToken()

    if (!token) {
      return true
    }

    try {
      const { exp } = jwtDecode(token)
      if (Date.now() >= exp * 1000) {
        return false
      } else {
        return true
      }
    } catch {
      return false
    }
  },
  fetchAccessToken: () => {
    return fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include'
    })
  },
  handleFetch: accessToken => {
    setAccessToken(accessToken)
  },
  handleError: err => {
    console.warn('Your refresh token is invalid. Try to relogin')
    console.error(err)
  }
})

const link = ApolloLink.from([apolloLogger, refreshLink, requestLink, httpLink])

// const link = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     )
//   },
//   httpRefresh,
//   wsLink
// )

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

const RedditApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default RedditApp
