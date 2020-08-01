import { gql } from '@apollo/client'

export const GET_USER_POSTS_QUERY = gql`
  query onGetUserPosts($userID: ID) {
    posts(userID: $userID) {
      id
      title
      text
      createdAt

      votes {
        id
        user {
          id
        }
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

      author {
        id
        username
      }

      category {
        id
        name
      }
    }
  }
`
