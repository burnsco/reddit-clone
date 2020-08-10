import { gql } from '@apollo/client'

export const SUBMIT_CHAT_MESSAGE = gql`
  mutation onSubmitChatMessage($text: String!, $chatID: ID!) {
    createChatMessage(data: { text: $text, chatID: $chatID }) {
      code
      success
      message
      chatMessage {
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
