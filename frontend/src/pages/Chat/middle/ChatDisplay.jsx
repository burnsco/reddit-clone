import React, { useRef } from 'react'
import {
  ChatDisplayContainer,
  ChatInputBox,
  ChatBoxInputContainer,
  UserChats,
  ChatButton
} from './styles'
import UserChat from './UserChat'

const ChatDisplay = () => {
  const inputRef = useRef(null)

  return (
    <ChatDisplayContainer>
      <UserChats>
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
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
