import { gql } from '@apollo/client'

export const CURRENT_USER = gql`
  query onCurrentUserQuery {
    currentUser {
      id
      username
      email
    }
  }
`
