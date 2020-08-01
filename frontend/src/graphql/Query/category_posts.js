import { gql } from '@apollo/client'

export const GET_POSTS_BY_CATEGORY_QUERY = gql`
  query onGetPostsByCategoryQuery($query: String!) {
    posts(query: $query) {
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
