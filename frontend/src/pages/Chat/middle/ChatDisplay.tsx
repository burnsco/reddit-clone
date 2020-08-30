import React from "react"
import { useQuery } from "@apollo/client"
import PropTypes from "prop-types"
import { ChatDisplayContainer, UserChats } from "./styles"
import UserChat from "./UserChat"
import { useChatRoomMessagesQuery } from "../../../generated/graphql"

const ChatDisplay: React.FC<{ chatID: string }> = ({ chatID }) => {
  const { loading, error, data } = useChatRoomMessagesQuery()
  if (loading) return null

  if (error) {
    console.log(error)
  }

  return (
    <ChatDisplayContainer>
      <UserChats>
        {data?.chatMessages.map(chatMessage => (
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
  chatID: PropTypes.string.isRequired
}

export default ChatDisplay
