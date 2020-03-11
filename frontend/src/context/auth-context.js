import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

function AuthProvider(props) {
  return <AuthContext.Provider {...props} />
}

function useAuth(props) {
  const [user, setUser] = useState(null)

  return user
}

export { AuthProvider, AuthContext, useAuth }
