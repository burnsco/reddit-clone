import gql from 'graphql-tag'

export const GET_USER_PROFILE_DATA = gql`
  query getUserProfileData($userID: String!) {
    user(userID: $userID) {
      id
      email
      username
      comments {
        id
        body
        author
      }
      posts {
        id
        title
        url
        category
        author {
          username
        }
        votes
      }
    }
  }
`
