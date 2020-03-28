import React from 'react'
import ListOfChatRooms from './left/ListOfChatRooms'
import ChatUserList from './right/ChatUserList'

const ChatRouter = ({ children }) => (
  <ChatRouterContainer>
    <RoomsListContainer>
      <ListOfChatRooms />
    </RoomsListContainer>

    <MainChatsContainer>{children}</MainChatsContainer>

    <UsersListContainer>
      <ChatUserList />
    </UsersListContainer>
  </ChatRouterContainer>
)
