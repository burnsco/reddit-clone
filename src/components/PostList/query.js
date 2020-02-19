import { gql } from 'apollo-boost'

const GET_ALL_POSTS = gql`
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

const GET_POSTS_BY_CATEGORY = gql`
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

export { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY }
