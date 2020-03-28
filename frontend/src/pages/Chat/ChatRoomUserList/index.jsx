import React from 'react'
import {
  ChatUserListContainer,
  UserIcon,
  UserIconTwo,
  UserListNav
} from './styles'
import { ChatRoomLink } from '../left/styles'
import {
  RightArrow,
  LeftArrow
} from '../../../components/shared/NavIcons/CircleArrows'

const ChatRoomUserList = () => {
  return (
    <>
      <ChatUserListContainer>
        <ChatRoomLink to="/">jetskinender</ChatRoomLink>
        <ChatRoomLink to="/"> mercurygopher </ChatRoomLink>
        <ChatRoomLink to="/">kenttwist </ChatRoomLink>
        <ChatRoomLink to="/">flapjackalone </ChatRoomLink>
        <ChatRoomLink to="/"> strikethroughlurk</ChatRoomLink>
        <ChatRoomLink to="/">lundybanded </ChatRoomLink>
        <ChatRoomLink to="/"> buffalovelcro </ChatRoomLink>
        <ChatRoomLink to="/"> reformistfoam </ChatRoomLink>
        <ChatRoomLink to="/">woofbanister</ChatRoomLink>
        <ChatRoomLink to="/">bushsmig</ChatRoomLink>
        <ChatRoomLink to="/"> elbowchloe </ChatRoomLink>
        <ChatRoomLink to="/">amazedfermium</ChatRoomLink>

        <UserListNav>
          <LeftArrow />
          <RightArrow />
        </UserListNav>
      </ChatUserListContainer>
    </>
  )
}

export default ChatRoomUserList
