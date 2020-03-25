import React from 'react'
import { gql, useMutation } from '@apollo/client'
import { onLogoutUser } from '../../utils/logout'

const logoutUser = gql`
  mutation onLogoutUser {
    logout
  }
`

const TestPage = () => {
  const [logout] = useMutation(logoutUser)
  return (
    <>
      <h3>Test Page</h3>
      <button
        onClick={() => {
          logout()
        }}
      >
        {' '}
        Sign Out
      </button>
    </>
  )
}

export default TestPage
