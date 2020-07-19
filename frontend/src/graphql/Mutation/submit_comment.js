import { gql } from '@apollo/client'

export const SUBMIT_COMMENT_MUTATION = gql`
  mutation onSubmitComment($body: String!, $postID: ID!) {
    createComment(data: { body: $body, postID: $postID }) {
      code
      success
      message
      comment {
        id
        createdAt
        updatedAt
        body
      }
    }
  }
`
