import { gql } from '@apollo/client'

export const GET_POST_AND_COMMENTS_QUERY = gql`
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
      }
    }
  }
`

export const COMMENTS_QUERY = gql`
  query CommentsForPost($postID: ID!) {
    post(postID: $postID) {
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
