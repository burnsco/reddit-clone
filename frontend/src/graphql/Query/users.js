import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query onGetUsers {
    users {
      id
      username
    }
  }
`
