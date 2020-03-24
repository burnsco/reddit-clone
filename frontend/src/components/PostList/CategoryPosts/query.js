import { gql } from '@apollo/client'

export const GET_POSTS_BY_CATEGORY_QUERY = gql`
  query onGetPostsByCategory($query: String!) {
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
        author {
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
