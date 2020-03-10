import React, { useEffect } from 'react'
import { useUser } from '../context/user-context'
import MainSpinner from '../components/shared/FallBackSpinner'

const loadAuthenticatedApp = () => import('./authenticatedApp')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./unAuthenticatedApp'))
import { setAccessToken } from '../context/access-token'

function App() {
  const user = useUser()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include'
    }).then(async x => {
      const { accessToken } = await x.json()
      console.log(accessToken)
      setAccessToken(accessToken)
      setLoading(false)
    })
  }, [])

  if (loading) return <MainSpinner />

  React.useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  return (
    <React.Suspense fallback={<MainSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}
