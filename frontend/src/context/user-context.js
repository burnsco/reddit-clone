import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

function UserProvider(props) {
  const [user, setUser] = useState(null)
  return <UserContext.Provider data={user} {...props} />
}

function useUser() {
  const context = useContext(UserContext)
  return context
}

export { UserProvider, useUser, UserContext }
