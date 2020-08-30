import React from 'react'
import {
  UserChatTimeStamp,
  UserChatUserName,
  UserChatBox,
  UserChatBody,
  UserChatHeader,
} from './styles'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate'

const UserChat = ({ chatMessages }) => (
  <>
    {chatMessages.map(message => (
      <UserChatBox key={`chatmessage-${message.id}`}>
        <UserChatHeader>
          <UserChatUserName>{message.sentBy.username}</UserChatUserName>
          <UserChatTimeStamp>
            {timeDifferenceForDate(message.createdAt)}
          </UserChatTimeStamp>
        </UserChatHeader>
        <UserChatBody>{message.text}</UserChatBody>
      </UserChatBox>
    ))}
  </>
)
export default UserChat
