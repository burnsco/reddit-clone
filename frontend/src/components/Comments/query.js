import { gql } from '@apollo/client'

export const GET_POST_AND_COMMENTS = gql`
  query getPostsAndComments($postID: ID!) {
    post(postID: $postID) {
      id
      title
      text
      createdAt
      category {
        name
      }
      author {
        username
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
