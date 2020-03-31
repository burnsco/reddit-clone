import React, { useContext } from 'react'
import { Container } from './styles'

import ListOfChatRooms from './left/ListOfChatRooms'
import ChatDisplay from './middle/ChatDisplay'
import ChatInputBox from './middle/ChatInput'
import ChatUserList from './right/ChatUserList'
import { UserContext } from '../../context/user-context'

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
