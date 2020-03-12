import React from 'react'
import { useUser } from '../context/user-context'
import MainSpinner from '../components/shared/FallBackSpinner'

const loadAuthenticatedApp = () => import('./authenticatedApp')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./unAuthenticatedApp'))

function App() {
  const user = useUser()

  React.useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  return (
    <React.Suspense fallback={<MainSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}
