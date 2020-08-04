import React from 'react'
import {
  ChatRoomsListContainer,
  ListOfChatRoomsContainer,
  ChatRoomLink,
  ChatRoomNav,
} from './styles'

const chatRooms = ['not-ready-yet']

const ListOfChatRooms = () => (
  <ChatRoomsListContainer>
    <ListOfChatRoomsContainer>
      {chatRooms.map((category) => (
        <ChatRoomLink key={`category-${category.id}`} to={`${category.name}`}>
          {category.name}
        </ChatRoomLink>
      ))}

      {/* Load more Rooms if needed */}
      <ChatRoomNav />
    </ListOfChatRoomsContainer>
  </ChatRoomsListContainer>
)

export default ListOfChatRooms
