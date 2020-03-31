import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect
} from 'react'
import { setAccessToken } from './access-token'

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
