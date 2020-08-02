import { gql } from '@apollo/client'

export const POSTS_SUBSCRIPTION = gql`
  subscription onPostAddedSubscription {
    post {
      node {
        id
        createdAt
        score
        title
        text

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

        votes {
          id
          type
          user {
            id
          }
        }
      }
    }
  }
`
