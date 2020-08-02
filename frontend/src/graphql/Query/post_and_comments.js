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
        createdAt
        updatedAt
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
