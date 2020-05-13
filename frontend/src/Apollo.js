import React from 'react'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import { WebSocketLink } from '@apollo/link-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import jwtDecode from 'jwt-decode'
import apolloLogger from 'apollo-link-logger'
import { onError } from '@apollo/link-error'
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
  ApolloProvider,
  RetryLink,
  split,
} from '@apollo/client'
import App from './App'
import { getAccessToken, setAccessToken } from './context/access-token'
import AppProviders from './context'
import { GlobalStyle } from './styles/GlobalStyle'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: 'https://reddit-clone-production.herokuapp.com/graphql',
  credentials: 'include',
})

const wsLink = new WebSocketLink({
  uri: `wss://reddit-clone-production.herokuapp.com/subscriptions`,
  options: {
    reconnect: true,
  },
})

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error,
  },
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
                authorization: `bearer ${accessToken}`,
              },
            })
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
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
    return fetch(
      'https://reddit-clone-production.herokuapp.com/refresh_token',
      {
        method: 'POST',
        credentials: 'include',
      }
    )
  },
  handleFetch: accessToken => {
    setAccessToken(accessToken)
  },
  handleError: err => {
    console.warn('Your refresh token is invalid. Try to relogin')
    console.error(err)
  },
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
    apolloLogger,
    refreshLink,
    requestLink,
    retryLink,
    splitLink,
  ]),
  cache,
  defaultOptions: {
    watchQuery: { errorPolicy: 'all' },
    query: { errorPolicy: 'all' },
    mutate: { errorPolicy: 'all' },
  },
})

const RedditApp = () => (
  <AppProviders>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </AppProviders>
)

export default RedditApp
