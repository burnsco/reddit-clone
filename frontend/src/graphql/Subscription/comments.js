import { gql } from '@apollo/client'

export const COMMENTS_SUBSCRIPTION = gql`
  subscription onCommentAdded($postID: ID!) {
    comment(postID: $postID) {
      node {
        id
        body
        createdAt
        updatedAt
        createdBy {
          id
          username
        }
      }
    }
  }
`
