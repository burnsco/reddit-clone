import { gql } from '@apollo/client'

export const GET_USER_PROFILE_DATA = gql`
  query getUserProfileData($userID: String!) {
    user(userID: $userID) {
      id
      email
      username
      comments {
        id
        body
        createdBy {
          username
        }
      }
      posts {
        id
        title
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