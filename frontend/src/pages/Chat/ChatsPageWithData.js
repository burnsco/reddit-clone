import React from 'react'
import { useQuery } from '@apollo/client'
import { StyledSpinner } from '../../styles/components/Spinner'
import ChatsPage from './ChatsPage'
import { CHATS_SUBSCRIPTION } from '../../graphql/Subscription/chats'
import { GET_CHAT_MESSAGES } from '../../graphql/Query/chat_room_messages'

export default function ChatsPageWithData({ chatID }) {
  const { subscribeToMore, data, loading, error } = useQuery(
    GET_CHAT_MESSAGES,
    {
      variables: { chatID },
    }
  )

  if (loading) return <StyledSpinner />

  if (error) {
    return <div>Error, please return to main page</div>
  }

  return (
    <ChatsPage
      {...data}
      subscribeToNewPosts={() =>
        subscribeToMore({
          document: CHATS_SUBSCRIPTION,
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
