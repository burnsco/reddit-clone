import { gql } from '@apollo/client'

export const CHATS_SUBSCRIPTION = gql`
  subscription onChatMessageAdded {
    chatMessageAdded {
      node {
        id
        text
        sentBy {
          createdAt
          username
        }
      }
    }
  }
`
