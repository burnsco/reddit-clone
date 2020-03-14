import { gql } from '@apollo/client'

export const SUBMIT_POST = gql`
  mutation SUBMIT_POST($title: String!, $text: String!, $categoryID: ID!) {
    createPost(data: { title: $title, text: $text, categoryID: $categoryID }) {
      code
      success
      message
    }
  }
`
