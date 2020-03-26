import React from 'react'
import {
  ChatPageWrapper,
  ChatRoomsListContainer,
  ChatDisplay,
  ChatUserList,
  ChatInputFooter,
  ChatRoomLink,
  ChatRoomsHeader,
  ListOfChatRooms
} from './styles'

function ChatPage() {
  return (
    <ChatPageWrapper>
      <ChatRoomsListContainer>
        <ListOfChatRooms>
          <ChatRoomLink to="/">React</ChatRoomLink>
          <ChatRoomLink to="/">Development</ChatRoomLink>
          <ChatRoomLink to="/">Music</ChatRoomLink>
          <ChatRoomLink to="/">Television</ChatRoomLink>
          <ChatRoomLink to="/">Funny</ChatRoomLink>
          <ChatRoomLink to="/">Aww</ChatRoomLink>
          <ChatRoomLink to="/">Fitness</ChatRoomLink>
          <ChatRoomLink to="/">ADHD</ChatRoomLink>
          <ChatRoomLink to="/">Adderall</ChatRoomLink>
          <ChatRoomLink to="/">GraphQL</ChatRoomLink>
          <ChatRoomLink to="/">FrontEnd</ChatRoomLink>
          <ChatRoomLink to="/">WebDev</ChatRoomLink>
          <ChatRoomLink to="/">Movies</ChatRoomLink>
          <ChatRoomLink to="/">Comedy</ChatRoomLink>
        </ListOfChatRooms>
      </ChatRoomsListContainer>

      <ChatDisplay>
        <ChatInputFooter>{/* Input Box For Chatting */}</ChatInputFooter>
      </ChatDisplay>

      <ChatUserList></ChatUserList>
    </ChatPageWrapper>
  )
}

export default ChatPage
