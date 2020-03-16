import { gql } from '@apollo/client'

export const GET_ALL_POSTS_QUERY = gql`
  query posts {
    posts {
      id
      title
      text
      createdAt
      votes {
        id
        downVote
        upVote
        user {
          id
        }
      }
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

export const GET_POSTS_BY_CATEGORY_QUERY = gql`
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
      votes {
        id
        downVote
        upVote
        user {
          id
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
