import React from 'react'
import { useQuery } from '@apollo/client'
import PropTypes from 'prop-types'
import { ChatDisplayContainer, UserChats } from './styles'
import UserChat from './UserChat'
import { GET_CHAT_MESSAGES_QUERY } from '../../../graphql/Query/chat_room_messages'
import { StyledSpinner } from '../../../styles/components/Spinner'
import CreateChatMessageForm from './CreateMessage'

const ChatDisplay = ({ chatID }) => {
  const { loading, error, data } = useQuery(GET_CHAT_MESSAGES_QUERY, {
    variables: { chatID },
  })

  if (loading) return <StyledSpinner />

  if (error) {
    console.log(error)
  }
  return (
    <ChatDisplayContainer>
      <UserChats>
        {data.chatMessages.map((chatMessage) => (
          <UserChat
            key={`chat-${chatID}-${chatMessage.id}`}
            chatMessage={chatMessage}
          />
        ))}
      </UserChats>

      <CreateChatMessageForm chatID={chatID} />
    </ChatDisplayContainer>
  )
}

ChatDisplay.propTypes = {
  chatID: PropTypes.string.isRequired,
}

export default ChatDisplay
