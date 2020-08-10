import { gql } from '@apollo/client'

export const GET_CHAT_MESSAGES_QUERY = gql`
  query onGetChatsByChatID($chatID: ID) {
    chatMessages(chatID: $chatID) {
      id
      text
      sentBy {
        createdAt
        username
      }
    }
  }
`
