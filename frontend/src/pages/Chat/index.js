import React from 'react'
import { Container } from './styles'
import ListOfChatRooms from './left/ListOfChatRooms'
import ChatsPageWithData from './ChatsPageWithData'

export default function ChatPage({ chatID }) {
  return (
    <Container>
      <ListOfChatRooms />

      <ChatsPageWithData chatID={chatID} />
    </Container>
  )
}
