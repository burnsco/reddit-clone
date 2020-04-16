import { gql } from '@apollo/client'

export const GET_USER_COMMENTS_QUERY = gql`
  query onGetUserComments($userID: ID) {
    comments(userID: $userID) {
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
`
