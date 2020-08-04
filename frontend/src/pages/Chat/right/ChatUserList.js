import React from 'react'
import { useQuery } from '@apollo/client'
import { ChatUserListContainer, UserListNav } from './styles'
import { ChatRoomLink } from '../left/styles'
import { GET_USERS } from '../../../graphql/Query/users'
import { StyledSpinner } from '../../../styles/components/Spinner'

const ChatUserList = () => {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return <StyledSpinner />

  if (error) {
    console.log(error)
  }
  return (
    <ChatUserListContainer>
      {data.users.map((user) => (
        <ChatRoomLink key={`user-chat-${user.username}`} to="/">
          {user.username}
        </ChatRoomLink>
      ))}

      <UserListNav />
    </ChatUserListContainer>
  )
}

export default ChatUserList
