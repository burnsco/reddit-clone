import React from 'react'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import { WebSocketLink } from '@apollo/link-ws'
import jwtDecode from 'jwt-decode'
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

const cache = new InMemoryCache({})

const httpLink = new HttpLink({
  uri: `http://localhost:4000/graphql`
})

const wsLink = new WebSocketLink({
  uri: `ws:localhost:4000/subscriptions`,
  options: {
    reconnect: true
  }
})

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

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any
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

const httpRefresh = ApolloLink.from([
  new httpLink(),
  new refreshLink(),
  new requestLink()
])

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpRefresh
)

const client = new ApolloClient({
  link: split,
  cache
})

const RedditApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default RedditApp
