import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHAT_MESSAGES_QUERY } from '../../graphql/Query/chat_room_messages'
import ChatsPage from './ChatsPage'
import { CHATS_SUBSCRIPTION } from '../../graphql/Subscription/chats'

function ChatsPageWithData({ chatID }) {
  const { subscribeToMore, loading, error, ...result } = useQuery(
    GET_CHAT_MESSAGES_QUERY,
    {
      variables: { chatID },
      fetchPolicy: 'network-only',
    }
  )

  if (loading) return <div>...loading</div>
  if (error) return <div>error</div>

  return (
    <ChatsPage
      {...result}
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
