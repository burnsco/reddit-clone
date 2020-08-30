import React from "react"
import {
  ChatRoomsListContainer,
  ListOfChatRoomsContainer,
  ChatRoomLink,
  ChatRoomNav
} from "./styles"

const chatRooms = ["not-ready-yet"]

const ListOfChatRooms: React.FC<{}> = () => {
  return (
    <ChatRoomsListContainer>
      <ListOfChatRoomsContainer>
        {chatRooms.map((category, i) => (
          <ChatRoomLink
            key={`chat-${category.id}-${i}`}
            to={`/${category.name}`}
          >
            {category.name}
          </ChatRoomLink>
        ))}

        {/* Load more Rooms if needed */}
        <ChatRoomNav />
      </ListOfChatRoomsContainer>
    </ChatRoomsListContainer>
  )
}

export default ListOfChatRooms
