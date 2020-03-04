import { gql } from '@apollo/client'

const GET_ALL_POSTS = gql`
  {
    posts {
      id
      title
      url
      author {
        username
      }
    }
  }
`

const GET_POSTS_BY_CATEGORY = gql`
  query getPostsByCategory($category: String!) {
    posts(category: $category) {
      id
      type
      title
      category
      author {
        username
      }
      comments {
        id
        body
        postID
        author {
          username
        }
      }
      url
      votes
    }
  }
`

export { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY }
