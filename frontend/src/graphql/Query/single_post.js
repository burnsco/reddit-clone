import { gql } from '@apollo/client'

export const GET_POST_AND_COMMENTS_QUERY = gql`
  query onPostAndComments($postID: ID!) {
    post(postID: $postID) {
      id
      title
      text
      createdAt

      category {
        id
        name
      }

      votes {
        id
        user {
          id
        }
      }
      author {
        id
        username
      }
      comments {
        createdAt
        updatedAt
        id
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
