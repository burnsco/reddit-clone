import { gql } from '@apollo/client'

export const SUBMIT_COMMENT = gql`
  mutation SUBMIT_COMMENT($body: String!, $postID: String!) {
    createComment(data: { body: $body, postID: $postID }) {
      code
      success
      message
    }
  }
`

export const LOGOUT_USER = gql`
  mutation LOGOUT_USER {
    logoutUser
  }
`
