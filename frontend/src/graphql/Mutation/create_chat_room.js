import { gql } from '@apollo/client'

export const CREATE_CHAT_ROOM = gql`
  mutation onCreateChatRoomForSubreddit($categoryID: ID!) {
    createChatRoom(data: { categoryID: $categoryID }) {
      code
      success
      message
    }
  }
`
