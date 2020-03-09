import { gql } from '@apollo/client'

const GET_ALL_POSTS = gql`
  query getPaginatedPosts($first: Int, $skip: Int, $cursor: String) {
    posts(first: $first, skip: $skip, after: $cursor) {
      id
      title
      text
      createdAt
      comments {
        id
        body
        author {
          username
        }
      }
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
      text
      comments {
        id
        body
        author {
          username
        }
      }
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

export { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY }
