import React, { useEffect } from 'react'

const CategoryChats = () => <div>stuff</div>

export default function ChatsPage(props) {
  const { subscribeToNewComments, data } = props
  const { chatID } = props

  useEffect(() => {
    const unsubscribe = subscribeToNewComments()
    return function cleanUp() {
      unsubscribe()
    }
  }, [subscribeToNewComments])

  return <CategoryChats {...data} chatID={chatID} />
}
