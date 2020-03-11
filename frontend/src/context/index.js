import React from 'react'
import { AuthProvider } from './auth-context.js'
import { UserProvider } from './user-context'

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}

export default AppProviders
