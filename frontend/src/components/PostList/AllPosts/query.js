import { gql } from '@apollo/client'

export const GET_ALL_POSTS_QUERY = gql`
  query onGetAllPosts {
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
