import { gql } from '@apollo/client'

export const SUBMIT_COMMENT = gql`
  mutation submitComment($body: String!, $postID: ID!) {
    createComment(data: { body: $body, postID: $postID }) {
      code
      success
      message
      comment {
        id
        body
        author {
          id
          username
        }
      }
    }
  }
`
