import { gql } from '@apollo/client'

const GET_ALL_POSTS = gql`
  query getPaginatedPosts($first: Int, $skip: Int, $cursor: String) {
    posts(first: $first, skip: $skip, after: $cursor) {
      id
      title
      url
      createdAt
      author {
        username
      }
      category {
        name
      }
    }
  }
`

const GET_POSTS_BY_CATEGORY = gql`
  query getPostsByCategory($query: String!) {
    posts(query: $query) {
      id
      title
      url
      author {
        username
      }
      category {
        name
      }
    }
  }
`

export { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY }
