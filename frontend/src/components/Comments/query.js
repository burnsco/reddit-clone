import { gql } from '@apollo/client'

export const GET_POST_AND_COMMENTS = gql`
  query getPostsAndComments($postID: ID!) {
    post(postID: $postID) {
      id
      title
      url
      category {
        name
      }
      comments {
        id
        body
        author {
          username
        }
      }
    }
  }
`
