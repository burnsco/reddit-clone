import React from 'react'
import {
  ChatPageWrapper,
  ChatRoomsList,
  ChatDisplay,
  ChatUserList,
  ChatInputFooter,
  ChatRoomLink
} from './styles'

function ChatPage() {
  return (
    <ChatPageWrapper>
      <ChatRoomsList>
        {/* List of Chats to Join */}
        <h3>Room List</h3>
      </ChatRoomsList>

      <ChatDisplay>
        {/* The Display of the Chat */}

        <ChatInputFooter>{/* Input Box For Chatting */}</ChatInputFooter>
      </ChatDisplay>

      <ChatUserList>{/* Users Currently In the Room */}</ChatUserList>
    </ChatPageWrapper>
  )
}

export default ChatPage
