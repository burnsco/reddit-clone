import { gql } from '@apollo/client'

export const SIGN_UP_MUTATION = gql`
  mutation SubmitDataAndSignUp(
    $username: String!
    $password: String!
    $email: String!
  ) {
    createUser(
      data: { email: $email, username: $username, password: $password }
    ) {
      message
      code
      success
      accessToken
      user {
        id
        email
        username
      }
    }
  }
`
