import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const query = gql`
  {
    feed {
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
