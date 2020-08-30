import React, { createContext, useContext } from 'react'
import { useAuth } from './auth-context'

const UserContext = createContext()

function UserProvider(props) {
  const { user, setUser } = useAuth()

  return <UserContext.Provider value={{ user, setUser }} {...props} />
}

function useUser() {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }

  return context
}

export { UserProvider, useUser }
