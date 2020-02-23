import gql from 'graphql-tag'

const GET_ALL_POSTS = gql`
  {
    posts {
      id
      title
      url
      category
      author {
        username
      }
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
