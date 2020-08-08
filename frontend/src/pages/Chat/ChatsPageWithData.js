import React from 'react'
import { useQuery } from '@apollo/client'
import { StyledSpinner } from '../../styles/components/Spinner'
import { GET_CHATS_BY_CATEGORY_QUERY } from '../../graphql/Query/category_chats'
import ChatsPage from './ChatsPage'
import { CHATS_SUBSCRIPTION } from '../../graphql/Subscription/chats'

export default function ChatsPageWithData({ category }) {
  const { subscribeToMore, data, loading, error } = useQuery(
    GET_CHATS_BY_CATEGORY_QUERY,
    {
      variables: { query: category },
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
            const newFeedItem = subscriptionData.data.chatAdded.node
            return { ...prev, chats: [newFeedItem, ...prev.chats] }
          },
        })
      }
    />
  )
}
