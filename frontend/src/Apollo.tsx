import React from 'react'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import jwtDecode from 'jwt-decode'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
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
import AppProviders from './context'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_HTTPLINK,
  credentials: 'include'
})

const wsClient = new SubscriptionClient(`${process.env.REACT_APP_WSLINK}`, {
  reconnect: true
})
const wsLink = new WebSocketLink(wsClient)

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 10,
    retryIf: error => !!error
  }
})

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any
      Promise.resolve(operation)
        .then(operations => {
          const accessToken = getAccessToken()
          if (accessToken) {
            operations.setContext({
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
      }
      return true
    } catch {
      return false
    }
  },
  fetchAccessToken: () =>
    fetch(`${process.env.REACT_APP_REFRESH}`, {
      method: 'POST',
      credentials: 'include'
    }),
  handleFetch: accessToken => {
    setAccessToken(accessToken)
  },
  handleError: err => {
    console.warn('Your refresh token is invalid. Try to relogin')
    console.error(err)
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
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )

      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    refreshLink,
    requestLink,
    retryLink,
    splitLink
  ]),
  cache,
  defaultOptions: {
    watchQuery: { errorPolicy: 'all' },
    query: { errorPolicy: 'all' },
    mutate: { errorPolicy: 'all' }
  }
})

export const RedditApp = () => (
  <>
    <ApolloProvider client={client}>
      <AppProviders>
        <App />
      </AppProviders>
    </ApolloProvider>
  </>
)
