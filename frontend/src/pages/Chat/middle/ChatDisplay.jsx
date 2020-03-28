import React, { useRef } from 'react'
import { useQuery, gql } from '@apollo/client'
import {
  ChatDisplayContainer,
  ChatInputBox,
  ChatBoxInputContainer,
  UserChats,
  ChatButton
} from './styles'
import UserChat from './UserChat'
import MainSpinner from '../../../components/shared/FallBackSpinner'

const GET_CHATS_QUERY = gql`
  query onGetChatMessages($chatID: ID!) {
    query
    messages(chatID: $chatID) {
      message
      success
      code
      messages {
        id
        createdAt
        username
      }
    }
  }
`

const ChatRoom = ({ chatID }) => {
  const { loading, error, data } = useQuery(GET_CHATS_QUERY)

  if (loading) return <MainSpinner />
  if (error) return <div>error!</div>

  return (
    <ChatDisplayContainer>
      <UserChats>
        {data.messages.map(message => (
          <UserChat key={message.id} message={data.message} />
        ))}
      </UserChats>
    </ChatDisplayContainer>
  )
}

export default ChatDisplay
