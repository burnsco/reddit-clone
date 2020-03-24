import { gql } from '@apollo/client'

export const DELETE_COMMENT_MUTATION = gql`
  mutation onDeleteComment($postID: ID!, $commentID: ID!) {
    deleteComment(data: { postID: $postID, commentID: $commentID }) {
      code
      message
      success
      comment {
        id
        body
        author {
          id
        }
      }
    }
  }
`
