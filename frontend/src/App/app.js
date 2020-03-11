import React, { useEffect, useState } from 'react'
import MainSpinner from '../components/shared/FallBackSpinner'
import { setAccessToken } from '../context/access-token'

const loadAuthenticatedApp = () => import('./authenticatedApp')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./unAuthenticatedApp'))

function App(props) {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include'
    }).then(async x => {
      const data = await x.json()
      if (data.accessToken) {
        setAccessToken(data.accessToken)
        setIsAuth(true)
      }
    })
  }, [])

  useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  return (
    <React.Suspense fallback={<MainSpinner />}>
      {isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App
