import { gql } from '@apollo/client'

export const POSTS_SUBSCRIPTION = gql`
  subscription onPostAdded {
    postAdded {
      node {
        id
        title
        text
        createdAt
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
