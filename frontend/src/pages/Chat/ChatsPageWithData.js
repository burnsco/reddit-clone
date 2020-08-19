import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHAT_MESSAGES_QUERY } from '../../graphql/Query/chat_room_messages'
import { CHATS_SUBSCRIPTION } from '../../graphql/Subscription/chats'
import ChatsPage from './ChatsPage'

function ChatsPageWithData({ chatID }) {
  const { subscribeToMore, loading, error, ...data } = useQuery(
    GET_CHAT_MESSAGES_QUERY,
    {
      variables: { chatID },
    }
  )

  if (loading) return null

  if (error) {
    console.log(error)
  }

  return (
    <ChatsPage
      {...data}
      chatID={chatID}
      subscribeToNewChatMessages={() =>
        subscribeToMore({
          document: CHATS_SUBSCRIPTION,
          variables: { chatID },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev
            const newFeedItem = subscriptionData.data.chatMessageAdded.node
            return {
              ...prev,
              chatMessages: [newFeedItem, ...prev.chatMessages],
            }
          },
        })
      }
    />
  )
}

export default ChatsPageWithData
