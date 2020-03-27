import React from 'react'
import {
  ChatRoomsListContainer,
  ListOfChatRoomsContainer,
  ChatRoomLink,
  ChatRoomNav
} from './styles'
import { ArrowBackwardIcon } from '../../../components/shared/NavIcons/ArrowBackward'
import { ArrowForwardIcon } from '../../../components/shared/NavIcons/ArrowForward'
import {
  LeftArrow,
  RightArrow
} from '../../../components/shared/NavIcons/CircleArrows'

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

        <ChatRoomNav>
          <LeftArrow />
          <RightArrow />
        </ChatRoomNav>
      </ListOfChatRoomsContainer>
    </ChatRoomsListContainer>
  )
}

export default ListOfChatRooms
