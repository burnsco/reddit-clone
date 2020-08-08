import { gql } from '@apollo/client'

export const CHATS_SUBSCRIPTION = gql`
  subscription onPostAddedSubscription {
    chatAdded {
      node {
        id
        createdAt
        messages {
          id
          text
          sentBy {
            id
            createdAt
            username
          }
        }
      }
    }
  }
`
