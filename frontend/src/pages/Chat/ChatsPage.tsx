import React, { useEffect } from 'react'

import { ChatDisplayContainer, UserChats } from './middle/styles'
import UserChat from './middle/UserChat'
import CreateChatMessageForm from './middle/CreateMessage'

export default function ChatsPage(props) {
  const { subscribeToNewChatMessages, data } = props
  const { chatID } = props
  const { chatMessages } = data

  useEffect(() => {
    const unsubscribe = subscribeToNewChatMessages()
    return function cleanUp() {
      unsubscribe()
    }
  }, [subscribeToNewChatMessages])

  return (
    <>
      <ChatDisplayContainer>
        <UserChats>
          <UserChat chatMessages={chatMessages} />
        </UserChats>

        <CreateChatMessageForm chatID={chatID} />
      </ChatDisplayContainer>
    </>
  )
}
