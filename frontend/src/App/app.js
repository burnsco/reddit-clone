import React, { useEffect, useState } from 'react'
import MainSpinner from '../components/shared/FallBackSpinner'
import { setAccessToken } from '../context/access-token'
import { CURRENT_USER } from '../components/Header/query'
import { useQuery } from '@apollo/client'
import { useUser } from '../context/user-context'

const loadAuthenticatedApp = () => import('./authenticatedApp')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./unAuthenticatedApp'))

function App(props) {
  const user = useUser()

  useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  return (
    <React.Suspense fallback={<MainSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App
