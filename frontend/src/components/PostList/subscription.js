import { gql } from '@apollo/client'

export const POSTS_SUBSCRIPTION = gql`
  subscription onPostAdded {
    postAdded {
      node {
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
  }
`
