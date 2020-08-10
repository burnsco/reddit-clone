import React, { useRef } from 'react'
import { useQuery } from '@apollo/client'
import {
  ChatDisplayContainer,
  ChatInputBox,
  ChatBoxInputContainer,
  UserChats,
} from './styles'
import UserChat from './UserChat'
import { GET_CHAT_MESSAGES_QUERY } from '../../../graphql/Query/chat_room_messages'
import { StyledSpinner } from '../../../styles/components/Spinner'

const ChatDisplay = ({ chatID }) => {
  const { loading, error, data } = useQuery(GET_CHAT_MESSAGES_QUERY, {
    variables: { chatID },
  })
  const inputRef = useRef(null)

  if (loading) return <StyledSpinner />
  if (error) {
    console.log(error)
  }
  console.log(data)
  return (
    <ChatDisplayContainer>
      <UserChats>
        {data.chatMessages.map((chatMessage) => (
          <UserChat
            key={`chat-${chatID}-${chatMessage.id}`}
            chatMessage={chatMessage}
          />
        ))}
      </UserChats>

      <ChatBoxInputContainer>
        <ChatInputBox
          ref={inputRef}
          placeholder="chat here"
          onMouseEnter={() => {
            inputRef.current.focus()
          }}
        />
      </ChatBoxInputContainer>
    </ChatDisplayContainer>
  )
}

export default ChatDisplay
