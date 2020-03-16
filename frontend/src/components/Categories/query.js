import { gql } from '@apollo/client'

export const GET_CATEGORIES_QUERY = gql`
  {
    categories {
      id
      name
    }
  }
`
