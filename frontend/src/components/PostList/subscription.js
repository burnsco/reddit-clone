import { gql } from '@apollo/client'

export const POSTS_SUBSCRIPTION = gql`
  subscription onPostAddedSubscription {
    postAdded {
      node {
        id
        title
        text
        createdAt

        comments {
          id
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
  }
`
