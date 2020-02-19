import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const query = gql`
  query getPostsByCategory($category: String!) {
    feed(category: $category) {
      id
      title
      url
      comments
      category
      author
      votes
    }
  }
`

export default () => useQuery(query)
