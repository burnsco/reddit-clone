import { gql } from '@apollo/client'

export const GET_POST_AND_COMMENTS_QUERY = gql`
  query onPostAndComments($postID: ID!) {
    post(postID: $postID) {
      id
      title
      text
      createdAt
      updateAt

      category {
        createdAt
        updatedAt
        id
        name
      }

      votes {
        id
        upVote
        downVote
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
