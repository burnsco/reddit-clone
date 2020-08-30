import React from "react"
import ChatsPage from "./ChatsPage"
import {
  NewChatMessageSubscriptionDocument,
  useChatRoomMessagesQuery
} from "../../generated/graphql"

const ChatsPageWithData: React.FC<{ chatID: string }> = ({ chatID }) => {
  const { subscribeToMore, loading, error, ...data } = useChatRoomMessagesQuery(
    {
      variables: { chatID }
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
          document: NewChatMessageSubscriptionDocument,
          variables: { chatID },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev
            const newFeedItem = subscriptionData.data?.chatMessages
            return {
              ...prev,
              chatMessages: [newFeedItem, ...prev.chatMessages]
            }
          }
        })
      }
    />
  )
}

export default ChatsPageWithData
