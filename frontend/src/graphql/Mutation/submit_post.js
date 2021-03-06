import { gql } from '@apollo/client'

export const SUBMIT_POST_MUTATION = gql`
  mutation SUBMIT_POST($title: String!, $text: String!, $categoryID: ID!) {
    createPost(data: { title: $title, text: $text, categoryID: $categoryID }) {
      code
      success
      message
      post {
        id
        title
        text
        createdAt
      }
    }
  }
`
