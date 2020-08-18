import React from 'react'
import {
  UserChatTimeStamp,
  UserChatUserName,
  UserChatBox,
  UserChatBody,
  UserChatHeader,
} from './styles'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate'

const UserChat = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.chatMessages.map(message => (
        <UserChatBox key={`chatmessage-${message.id}`}>
          <UserChatHeader>
            <UserChatUserName>{message.sentBy.username}</UserChatUserName>
            <UserChatTimeStamp>
              {timeDifferenceForDate(message.sentBy.createdAt)}
            </UserChatTimeStamp>
          </UserChatHeader>
          <UserChatBody>{message.text}</UserChatBody>
        </UserChatBox>
      ))}
    </>
  )
}
export default UserChat
