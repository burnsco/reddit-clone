import React from 'react'
import { Container } from './styles'

import ListOfChatRooms from './left/ListOfChatRooms'
import ChatDisplay from './middle/ChatDisplay'
import ChatInputBox from './middle/ChatInput'
import ChatUserList from './right/ChatUserList'

function ChatPage() {
  return (
    <Container>
      <ListOfChatRooms />

      <ChatDisplay />

      <ChatUserList />
    </Container>
  )
}

export default ChatPage
