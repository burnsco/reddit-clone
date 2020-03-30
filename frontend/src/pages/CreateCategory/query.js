import { gql } from '@apollo/client'

export const GET_CATEGORIES = gql`
  {
    categories {
      id
      name
    }
  }
`
