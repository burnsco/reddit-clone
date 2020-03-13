import gql from 'graphql-tag'

export const COMMENTS_SUBSCRIPTION = gql`
  subscription onCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      node {
        id
        body
        author {
          username
        }
      }
    }
  }
`
