import React from 'react'
import {
  UserChatTimeStamp,
  UserChatUserName,
  UserChatBox,
  UserChatBody,
  UserChatHeader,
} from './styles'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate'

const UserChat = ({ chatMessage }) => (
  <UserChatBox>
    <UserChatHeader>
      <UserChatUserName>{chatMessage.sentBy.username}</UserChatUserName>
      <UserChatTimeStamp>
        {timeDifferenceForDate(chatMessage.sentBy.createdAt)}
      </UserChatTimeStamp>
    </UserChatHeader>
    <UserChatBody>{chatMessage.text}</UserChatBody>
  </UserChatBox>
)

export default UserChat
