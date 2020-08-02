import { gql } from '@apollo/client'

export const GET_POSTS_BY_CATEGORY_QUERY = gql`
  query onGetPostsByCategoryQuery($query: String!) {
    posts(query: $query) {
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
        createdAt
        updatedAt
        body
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
