import { gql } from '@apollo/client'

export const CURRENT_USER_QUERY = gql`
  query onCurrentUserQuery {
    currentUser {
      id
      username
      email
    }
  }
`
