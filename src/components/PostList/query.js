import { gql } from 'apollo-boost'

export const POSTS_QUERY = gql`
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
