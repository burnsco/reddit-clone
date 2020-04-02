import React, { useEffect, Suspense, useContext } from 'react'
import MainSpinner from '../components/shared/FallBackSpinner'
import { useUser } from '../context/user-context'
import { setAccessToken } from '../context/access-token'
import { AuthContext } from '../context/auth-context'
import { useLazyQuery } from '@apollo/client'
import { CURRENT_USER } from '../components/Header/query'

const loadAuthenticatedApp = () => import('./Authenticated')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./UnAuthenticated'))

function App() {
  const { setData } = useContext(AuthContext)
  const [currentUser, { loading, error, data }] = useLazyQuery(CURRENT_USER, {
    fetchPolicy: 'network-only'
  })
  let user = useUser()

  useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  useEffect(() => {
    currentUser()
  }, [])

  if (user === null && data && data.currentUser) {
    // User refreshes (loses context) but refresh tokens work (and can query)
    return (
      <Suspense fallback={<MainSpinner />}>
        <AuthenticatedApp />
      </Suspense>
    )
  }

  return (
    <>
      <Suspense fallback={<MainSpinner />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Suspense>
    </>
  )
}

export default App
