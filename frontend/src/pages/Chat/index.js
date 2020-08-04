import React from 'react'
import { Container } from './styles'

import ListOfChatRooms from './left/ListOfChatRooms'
import ChatDisplay from './middle/ChatDisplay'
import ChatUserList from './right/ChatUserList'

export default function ChatPage() {
  return (
    <Container>
      <ListOfChatRooms />

      <ChatDisplay />

      <ChatUserList />
    </Container>
  )
}
