import { gql } from '@apollo/client'

export const GET_COMMENTS_QUERY = gql`
  query onCommentsForPost($postID: ID!) {
    post(postID: $postID) {
      id
      title
      text
      createdAt
      updatedAt
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
        body
        createdBy {
          id
          username
        }
      }
    }
  }
`
