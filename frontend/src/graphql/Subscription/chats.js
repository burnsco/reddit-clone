import { gql } from '@apollo/client'

export const CHATS_SUBSCRIPTION = gql`
  subscription onChatMessageAdded {
    chatMessageAdded {
      node {
        id
        createdAt
        text
        sentBy {
          username
        }
      }
    }
  }
`
