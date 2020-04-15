import { gql } from '@apollo/client'
export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      success
      message
      code
      accessToken
      user {
        id
        email
        username
      }
    }
  }
`
