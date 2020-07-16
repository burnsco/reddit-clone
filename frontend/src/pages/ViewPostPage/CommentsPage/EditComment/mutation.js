import { gql } from '@apollo/client'

export const UPDATE_COMMENT_MUTATION = gql`
  mutation onUpdateComment($postID: ID!, $commentID: ID!, $body: String!) {
    updateComment(data: { postID: $postID, commentID: $commentID, body: $body }) {
      code
      message
      success
      code
      message
      success
      comment {
        id
        body
        createdAt
        updatedAt
      }
    }
  }
`
