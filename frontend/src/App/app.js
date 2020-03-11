import React, { useEffect, useState, useContext } from 'react'
import { useUser } from '../context/user-context'
import MainSpinner from '../components/shared/FallBackSpinner'
import { setAccessToken } from '../context/access-token'
import { UserContext } from '../context/user-context'

const loadAuthenticatedApp = () => import('./authenticatedApp')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./unAuthenticatedApp'))

function App(props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include'
    }).then(async x => {
      const data = await x.json()
      console.log(data)
      setAccessToken(data.accessToken)
    })
  }, [])

  useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  return (
    <React.Suspense fallback={<MainSpinner />}>
      {loading ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App
