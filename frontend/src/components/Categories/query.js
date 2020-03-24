import { gql } from '@apollo/client'

export const GET_CATEGORIES_QUERY = gql`
  query onGetCategoriesQuery {
    categories {
      id
      name
    }
  }
`
