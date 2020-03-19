import { gql } from '@apollo/client'

export const COMMENTS_SUBSCRIPTION = gql`
  subscription onCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      node {
        id
        body
        createdAt
        author {
          username
        }
      }
    }
  }
`
