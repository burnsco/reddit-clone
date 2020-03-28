import { gql } from '@apollo/client'

export const POSTS_BY_CATEGORY_QUERY = gql`
  query onGetPostsByCategoryQuery($query: String!) {
    posts(query: $query) {
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
        createdAt
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
