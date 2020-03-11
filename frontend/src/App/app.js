import React, { useEffect, useState, lazy } from 'react'
import MainSpinner from '../components/shared/FallBackSpinner'
import { setAccessToken } from '../context/access-token'
import { CURRENT_USER } from '../components/Header/query'
import { useQuery } from '@apollo/client'
import { useUser } from '../context/user-context'

const AuthenticatedApp = lazy(() => import('./authenticatedApp'))
const UnauthenticatedApp = lazy(() => import('./unAuthenticatedApp'))

function App(props) {
  const user = useUser()

  return (
    <React.Suspense fallback={<MainSpinner />}>
      {user.username ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App
