import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider(props) {
  const [data, setData] = useState({ user: null })

  return <AuthContext.Provider value={{ data, setData }} {...props} />
}

function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }

  return context
}

export { AuthProvider, useAuth }
