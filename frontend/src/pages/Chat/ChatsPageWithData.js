import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHAT_MESSAGES_QUERY } from '../../graphql/Query/chat_room_messages'
import { CHATS_SUBSCRIPTION } from '../../graphql/Subscription/chats'
import { StyledSpinner } from '../../styles/components/Spinner'
import ChatsPage from './ChatsPage'
import MainSpinner from '../../components/shared/FallBackSpinner'

function ChatsPageWithData({ chatID }) {
  const { subscribeToMore, loading, error, networkStatus, ...data } = useQuery(
    GET_CHAT_MESSAGES_QUERY,
    {
      variables: { chatID },
    }
  )

  if (networkStatus === 4) return <MainSpinner />
  if (loading) return <StyledSpinner />

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
