import React from 'react'
import { Container } from './styles'

import ListOfChatRooms from './left/ListOfChatRooms'
import ChatsPageWithData from './ChatsPageWithData'
// import ChatDisplay from './middle/ChatDisplay'

export default function ChatPage({ chatID }) {
  return (
    <Container>
      <ListOfChatRooms />

      {/* <ChatDisplay chatID={chatID} /> */}
      <ChatsPageWithData chatID={chatID} />
    </Container>
  )
}
