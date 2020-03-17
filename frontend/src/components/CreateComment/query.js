import { gql } from '@apollo/client'

export const CURRENT_USER = gql`
  {
    currentUser {
      id
      username
      email
    }
  }
`
