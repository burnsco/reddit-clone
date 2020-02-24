import gql from 'graphql-tag'

const GET_ALL_POSTS = gql`
  {
    posts {
      id
      title
      url
      category
      comments {
        id
      }
      author {
        username
      }
      votes
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
        author
      }
      url
    }
  }
`

export { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY }
