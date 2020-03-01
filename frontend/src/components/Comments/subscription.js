import gql from 'graphql-tag'

export const COMMENTS_SUBSCRIPTION = gql`
  subscription onCommentCreated($postID: ID!) {
    commentCreated(postID: $postID) {
      id
      body
      author {
        username
      }
    }
  }
`
