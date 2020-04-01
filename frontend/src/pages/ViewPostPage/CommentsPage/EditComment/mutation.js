import { gql } from '@apollo/client'

export const EDIT_COMMENT_MUTATION = gql`
  mutation onEditComment($postID: ID!, $commentID: ID!) {
    editComment(data: { postID: $postID, commentID: $commentID }) {
      code
      message
      success
    }
  }
`
