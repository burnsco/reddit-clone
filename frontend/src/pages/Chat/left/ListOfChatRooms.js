import React from 'react'
import { useQuery } from '@apollo/client'
import {
  ChatRoomsListContainer,
  ListOfChatRoomsContainer,
  ChatRoomLink,
  ChatRoomNav,
} from './styles'
import { StyledSpinner } from '../../../styles/components/Spinner'
import { GET_CHAT_ROOMS_QUERY } from '../../../graphql/Query/chat_rooms'

export default function ListOfChatRooms() {
  const { loading, data, error } = useQuery(GET_CHAT_ROOMS_QUERY)

  if (loading) return <StyledSpinner />

  if (error) {
    console.log(error)
    return <div>Error!</div>
  }

  return (
    <ChatRoomsListContainer>
      <ListOfChatRoomsContainer>
        {data.chatRooms.map((room, i) => (
          <ChatRoomLink
            key={`chat-room-${room.category.name}-${i}`}
            to={`/chat/${room.id}`}
          >
            {room.category.name}
          </ChatRoomLink>
        ))}

        <ChatRoomNav />
      </ListOfChatRoomsContainer>
    </ChatRoomsListContainer>
  )
}
