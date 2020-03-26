import React from 'react'
import {
  ChatRoomsListContainer,
  ListOfChatRoomsContainer,
  ChatRoomLink
} from './styles'

const ListOfChatRooms = () => {
  return (
    <ChatRoomsListContainer>
      <ListOfChatRoomsContainer>
        <ChatRoomLink to="/">#React</ChatRoomLink>
        <ChatRoomLink to="/">#Development</ChatRoomLink>
        <ChatRoomLink to="/">#Music</ChatRoomLink>
        <ChatRoomLink to="/">#Television</ChatRoomLink>
        <ChatRoomLink to="/">#Funny</ChatRoomLink>
        <ChatRoomLink to="/">#Aww</ChatRoomLink>
        <ChatRoomLink to="/">#Fitness</ChatRoomLink>
        <ChatRoomLink to="/">#ADHD</ChatRoomLink>
        <ChatRoomLink to="/">#Adderall</ChatRoomLink>
        <ChatRoomLink to="/">#GraphQL</ChatRoomLink>
        <ChatRoomLink to="/">#FrontEnd</ChatRoomLink>
        <ChatRoomLink to="/">#WebDev</ChatRoomLink>
        <ChatRoomLink to="/">#Movies</ChatRoomLink>
        <ChatRoomLink to="/">#Comedy</ChatRoomLink>
      </ListOfChatRoomsContainer>
    </ChatRoomsListContainer>
  )
}

export default ListOfChatRooms
