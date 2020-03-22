import React, { createContext, useContext } from 'react'

export const AuthContext = createContext(null)

export const useAuth = () => useContext(authContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(AuthContext)
}
