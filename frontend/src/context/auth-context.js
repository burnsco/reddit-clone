import React, { createContext, useContext, useState } from 'react'
import { useQuery } from '@apollo/client'
import { CURRENT_USER } from '../components/Header/query'
import MainSpinner from '../components/shared/FallBackSpinner/index'

const AuthContext = createContext()

function AuthProvider(props) {
  const [user, setUser] = useState(null)
  const { loading, error, data } = useQuery(CURRENT_USER)

  if (loading) return <MainSpinner />

  if (error) {
    console.log(`auth provider error ==> ${error.message}`)
  }
  if (data !== undefined) {
    setUser(true)
  }

  return <AuthContext.Provider value={{ user, setUser }} {...props} />
}

function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }

  return context
}

export { AuthProvider, AuthContext, useAuth }
