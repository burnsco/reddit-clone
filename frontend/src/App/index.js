import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { CURRENT_USER_QUERY } from '../graphql/Query/current_user'
import { useUser } from '../context/user-context'
import MainSpinner from '../components/shared/FallBackSpinner'
import AuthenticatedApp from './Authenticated'
import UnAuthenticatedApp from './UnAuthenticated'

function App() {
  const [currentUser, { data, loading }] = useLazyQuery(CURRENT_USER_QUERY)

  const user = useUser()

  useEffect(() => {
    currentUser()
  }, [currentUser])

  if (loading) return <MainSpinner />

  if (user === null && data && data.currentUser) {
    return <AuthenticatedApp />
  }

  return <>{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</>
}

export default App
