import { gql } from '@apollo/client'

export const SUBMIT_POST = gql`
  mutation SUBMIT_POST($title: String!, $text: String!, $categoryID: ID!) {
    createPost(data: { title: $title, text: $text, categoryID: $categoryID }) {
      code
      success
      message
      post {
        id
        title
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
  }
`
