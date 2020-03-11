import React, { createContext, useContext } from 'react'

const AuthContext = createContext(null)

function AuthProvider(props) {
  return <AuthContext.Provider {...props} />
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth, AuthContext }
