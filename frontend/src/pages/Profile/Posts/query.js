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
        downVote
        upVote
        user {
          id
        }
      }

      comments {
        id
        body
        createdAt
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
