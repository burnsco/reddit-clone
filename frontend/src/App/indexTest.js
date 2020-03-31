import React, { useEffect, Suspense } from 'react'
import MainSpinner from '../components/shared/FallBackSpinner'

const loadAuthenticatedApp = () => import('./Authenticated')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./UnAuthenticated'))

function App() {
  const user = useUser()

  useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  return (
    <Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  )
}

export default App
