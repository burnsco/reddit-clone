import { gql } from '@apollo/client'

export const CREATE_CATEGORY_MUTATION = gql`
  mutation onCreateCategory($name: String!) {
    createCategory(data: { name: $name }) {
      code
      success
      message
    }
  }
`
