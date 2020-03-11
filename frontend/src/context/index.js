import React from 'react'
import { UserProvider } from './user-context'

function AppProviders({ children }) {
  return <UserProvider>{children}</UserProvider>
}

export default AppProviders
