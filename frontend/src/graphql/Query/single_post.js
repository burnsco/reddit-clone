import { gql } from '@apollo/client'

export const GET_POST_AND_COMMENTS_QUERY = gql`
  query onPostAndComments($postID: ID!) {
    post(postID: $postID) {
      id
      createdAt
      updatedAt
      score
      title
      text

      category {
        id
        name
      }

      votes {
        id
        type
        user {
          id
        }
      }
      author {
        id
        username
      }
      comments {
        id
        createdAt
        updatedAt
      }
    }
  }
`

export const COMMENTS_QUERY = gql`
  query onCommentsForPost($postID: ID!) {
    post(postID: $postID) {
      comments {
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
