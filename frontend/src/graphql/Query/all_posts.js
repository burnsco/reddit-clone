import { gql } from '@apollo/client'

export const ALL_POSTS_QUERY = gql`
  query onGetAllPostsQuery {
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
