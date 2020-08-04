import React from 'react'
import { useQuery } from '@apollo/client'
import {
  ChatRoomsListContainer,
  ListOfChatRoomsContainer,
  ChatRoomLink,
  ChatRoomNav,
} from './styles'
import { StyledSpinner } from '../../../styles/components/Spinner'
import { GET_CATEGORIES_QUERY } from '../../../graphql/Query/categories'

export default function ListOfChatRooms() {
  const { loading, data, error } = useQuery(GET_CATEGORIES_QUERY)

  if (loading) return <StyledSpinner />

  if (error) {
    console.log(error)
    return <div>Error!</div>
  }
  return (
    <ChatRoomsListContainer>
      <ListOfChatRoomsContainer>
        {data.categories.map((category, i) => (
          <ChatRoomLink key={`chat-room-${category.name}-${i}`} to="/">
            {category.name}
          </ChatRoomLink>
        ))}

        <ChatRoomNav />
      </ListOfChatRoomsContainer>
    </ChatRoomsListContainer>
  )
}
