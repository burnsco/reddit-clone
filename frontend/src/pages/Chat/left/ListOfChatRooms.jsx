import React from 'react'
import { useQuery } from '@apollo/client'
import {
  ChatRoomsListContainer,
  ListOfChatRoomsContainer,
  ChatRoomLink,
  ChatRoomNav
} from './styles'
import { GET_CATEGORIES_QUERY } from '../../../components/Categories/query'
import { ArrowBackwardIcon } from '../../../components/shared/NavIcons/ArrowBackward'
import { ArrowForwardIcon } from '../../../components/shared/NavIcons/ArrowForward'
import {
  LeftArrow,
  RightArrow
} from '../../../components/shared/NavIcons/CircleArrows'
import MainSpinner from '../../../components/shared/FallBackSpinner'
import { CategoryLink } from '../../../components/Categories/styles'

const ListOfChatRooms = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY)

  if (loading) return <MainSpinner />
  if (error) return <div>Error!</div>

  return (
    <ChatRoomsListContainer>
      <ListOfChatRoomsContainer>
        {data.categories.map(category => (
          <ChatRoomLink key={`category-${category.id}`} to={`${category.name}`}>
            {category.name}
          </ChatRoomLink>
        ))}

        {/* Load more Rooms if needed */}
        <ChatRoomNav>
          <LeftArrow />
          <RightArrow />
        </ChatRoomNav>
      </ListOfChatRoomsContainer>
    </ChatRoomsListContainer>
  )
}

export default ListOfChatRooms
