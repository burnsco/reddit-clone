import { gql } from '@apollo/client'

export const CATEGORIES_QUERY = gql`
  query onGetCategoriesQuery {
    categories {
      id
      name
    }
  }
`
