import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext(null)

function UserProvider(props) {
  const [user, setUser] = useState(null)
  return <UserContext.Provider value={user} {...props} />
}

function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export { UserProvider, useUser }
