import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

function UserProvider(props) {
  return <UserContext.Provider {...props} />
}

function useUser() {
  const context = useContext(UserContext)
  return context
}

export { UserProvider, useUser, UserContext }
