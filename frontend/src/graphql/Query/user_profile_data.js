import { gql } from '@apollo/client'

export const GET_USER_PROFILE_DATA = gql`
  query getUserProfileData($userID: String!) {
    user(userID: $userID) {
      id
      email
      username
      comments {
        id
        createdAt
        updatedAt
        body
        createdBy {
          username
        }
      }
      posts {
        id
        createdAt
        updatedAt
        score
        title
        text
        url
        category {
          id
          name
        }
        author {
          id
          username
        }
      }
    }
  }
`
