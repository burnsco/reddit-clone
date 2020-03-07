import { createContext } from 'react'

const user = localStorage.getItem('user')

export const UserContext = createContext(user)
