import React, { createContext, useContext, useState } from 'react'
import { useAuth } from './auth-context'

const UserContext = createContext()

function UserProvider(props) {
  const [user, setUser] = useState({ username: null, email: null, id: null })
  console.log('user ==>')
  console.log(user)
  return <UserContext.Provider value={{ user, setUser }} {...props} />
}

function useUser() {
  const { user } = useContext(UserContext)

  if (user === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }

  return user
}

export { UserProvider, useUser, UserContext }
