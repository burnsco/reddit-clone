import { gql } from '@apollo/client'

export const GET_ALL_POSTS_QUERY = gql`
  query onGetAllPostsQuery {
    posts {
      id
      createdAt
      updatedAt
      score
      title
      text

      votes {
        id
        type
        user {
          id
        }
      }

      comments {
        id
        body
        createdAt
        updatedAt
        createdBy {
          id
          username
        }
      }

      author {
        id
        username
      }

      category {
        id
        name
      }
    }
  }
`
