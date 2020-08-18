import React, { useEffect } from 'react'
import { ChatDisplayContainer, UserChats } from './middle/styles'
import UserChat from './middle/UserChat'
import CreateChatMessageForm from './middle/CreateMessage'

export default function ChatsPage(data) {
  const { subscribeToNewChatMessages } = data
  const { chatID } = data

  useEffect(() => {
    const unsubscribe = subscribeToNewChatMessages()
    return function cleanUp() {
      unsubscribe()
    }
  }, [subscribeToNewChatMessages])
  console.log(data)
  return (
    <>
      <ChatDisplayContainer>
        <UserChats>
          {data.chatMessages.map(chatMessage => (
            <UserChat
              key={`chat-${chatID}-${chatMessage.id}`}
              chatMessage={chatMessage}
            />
          ))}
        </UserChats>

        <CreateChatMessageForm chatID={chatID} />
      </ChatDisplayContainer>
    </>
  )
}
