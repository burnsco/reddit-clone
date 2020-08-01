import { gql } from '@apollo/client'

export const GET_ALL_POSTS_QUERY = gql`
  query onGetAllPostsQuery {
    posts {
      id
      title
      text
      createdAt
      updatedAt

      votes {
        id
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
