import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ChatDisplayContainer, UserChats } from './styles'
import UserChat from './UserChat'
import MainSpinner from '../../../components/shared/FallBackSpinner'

const GET_CHATS_QUERY = gql`
  query onGetChatMessages($chatID: ID!) {
    chatMessage(chatID: $chatID) {
      id
      createdAt
      username
    }
  }
`

const ChatRoom = () => {
  const { loading, error, data } = useQuery(GET_CHATS_QUERY)

  if (loading) return <MainSpinner />
  if (error) return <div>error!</div>

  return (
    <ChatDisplayContainer>
      <UserChats>
        {data.messages.map((message) => (
          <UserChat key={message.id} message={data.message} />
        ))}
      </UserChats>
    </ChatDisplayContainer>
  )
}

export default ChatRoom
