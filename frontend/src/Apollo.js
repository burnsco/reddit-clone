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
  useQuery,
  ApolloProvider,
  split
} from '@apollo/client'
import App from './App'
import { getAccessToken, setAccessToken } from './context/access-token'
import { CURRENT_USER } from './components/Header/query'
import AuthenticatedApp from './App/Authenticated'
import UnAuthenticatedApp from './App/UnAuthenticated'
import MainSpinner from './components/shared/FallBackSpinner'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/subscriptions`,
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
    splitLink
  ]),
  cache
})

function Switch() {
  const { data, loading, error } = useQuery(CURRENT_USER)
  if (loading) return <MainSpinner />

  return data.currrentUser ? <AuthenticatedApp /> : <UnAuthenticatedApp />
}

const RedditApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default RedditApp
