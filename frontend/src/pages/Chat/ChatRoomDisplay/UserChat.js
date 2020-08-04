import React from 'react'
import {
  UserChatTimeStamp,
  UserChatUserName,
  UserChatBox,
  UserChatBody,
  UserChatHeader,
} from './styles'

const UserChat = () => (
  <UserChatBox>
    <UserChatHeader>
      <UserChatUserName>StarTTrist</UserChatUserName>
      <UserChatTimeStamp>Today at 3:16 AM</UserChatTimeStamp>
    </UserChatHeader>
    <UserChatBody>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore
      nam quasi itaque vero asperiores dicta sapiente laboriosam distinctio
      nobis.
    </UserChatBody>
  </UserChatBox>
)

export default UserChat
