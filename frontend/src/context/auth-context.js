import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect
} from 'react'
import { setAccessToken } from './access-token'

const AuthContext = createContext()

function AuthProvider(props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({ user: null })

  useLayoutEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include'
    }).then(async x => {
      const { accessToken } = await x.json()
      setAccessToken(accessToken)
      setLoading(false)
    })
  }, [data])

  return <AuthContext.Provider value={{ data }} {...props} />
}

function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }

  return context
}

export { AuthProvider, useAuth }
