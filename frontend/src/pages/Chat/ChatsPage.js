import React, { useEffect } from 'react'

const CategoryChats = () => <div>stuff</div>

export default function ChatsPage(data) {
  const { subscribeToNewMessages } = data
  const { chatID } = data

  useEffect(() => {
    const unsubscribe = subscribeToNewMessages()
    return function cleanUp() {
      unsubscribe()
    }
  }, [subscribeToNewMessages])

  return (
    <>
      {data.chats.map((chat) => (
        <CategoryChats chat={chat} chatID={chatID} />
      ))}
    </>
  )
}
