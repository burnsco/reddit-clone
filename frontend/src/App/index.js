import React, { useEffect, Suspense, lazy } from 'react'
import { useLazyQuery } from '@apollo/client'
import MainSpinner from '../components/shared/FallBackSpinner'
import { useUser } from '../context/user-context'

import { CURRENT_USER } from '../components/Header/query'

const loadAuthenticatedApp = () => import('./Authenticated')
const AuthenticatedApp = lazy(loadAuthenticatedApp)
const UnauthenticatedApp = lazy(() => import('./UnAuthenticated'))

function App() {
  const [currentUser, { data }] = useLazyQuery(CURRENT_USER, {
    fetchPolicy: 'network-only',
  })

  const user = useUser()

  useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  useEffect(() => {
    currentUser()
  }, [currentUser])

  if (user === null && data && data.currentUser) {
    return (
      <Suspense fallback={<MainSpinner />}>
        <AuthenticatedApp />
      </Suspense>
    )
  }

  return (
    <Suspense fallback={<MainSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  )
}

export default App
