import React, { useEffect, Suspense, useState, useContext } from 'react'
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
  const [currentUser, { data, loading, error }] = useLazyQuery(CURRENT_USER, {
    fetchPolicy: 'network-only'
  })
  const { setData } = useContext(AuthContext)
  const user = useUser()

  useEffect(() => {
    loadAuthenticatedApp()
    console.log('first effect')
  }, [])

  useEffect(() => {
    console.log('second effect')
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include'
    }).then(async x => {
      const { accessToken } = await x.json()
      setAccessToken(accessToken)
      currentUser()
    })
  }, [])

  if (loading) return <MainSpinner />

  if (data) {
    const { currentUser } = data
    console.log(currentUser)
    setData({ currentUser })
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
