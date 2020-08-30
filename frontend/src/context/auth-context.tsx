import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider(props) {
  const [user, setUser] = useState(null)

  return <AuthContext.Provider value={{ user, setUser }} {...props} />
}

function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }

  return context
}

export { AuthProvider, useAuth }
