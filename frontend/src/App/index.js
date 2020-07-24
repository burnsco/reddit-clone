import React from 'react'
import { useQuery } from '@apollo/client'
import MainSpinner from '../components/shared/FallBackSpinner'
import { CURRENT_USER_QUERY } from '../graphql/Query/current_user'
import AuthenticatedApp from './Authenticated'
import UnAuthenticatedApp from './UnAuthenticated'

export default function App() {
  const { data, loading } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <MainSpinner />

  return (
    <>
      {data && data.currentUser ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  )
}
