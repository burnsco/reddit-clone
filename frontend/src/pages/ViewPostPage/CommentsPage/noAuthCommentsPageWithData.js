import React from 'react'
import { useQuery } from '@apollo/client'
import { COMMENTS_QUERY } from '../query'
import { COMMENTS_SUBSCRIPTION } from '../subscription'
import CommentsPage from './noAuthCommentsPage'
import MainSpinner from '../../../components/shared/FallBackSpinner'

function CommentsPageWithData({ postID }) {
  const { subscribeToMore, loading, error, refetch, networkStatus, ...result } = useQuery(
    COMMENTS_QUERY,
    {
      variables: { postID },
      notifyOnNetworkStatusChange: true,
    }
  )
  if (networkStatus === 4) return <MainSpinner />
  if (loading) return <MainSpinner />
  if (error) return <div>error</div>

  return (
    <CommentsPage
      {...result}
      refetch={refetch}
      postID={postID}
      subscribeToNewComments={() =>
        subscribeToMore({
          document: COMMENTS_SUBSCRIPTION,
          variables: { postID },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev
            const newFeedItem = subscriptionData.data.commentAdded.node
            return {
              ...prev,
              post: {
                comments: [newFeedItem, ...prev.post.comments],
              },
            }
          },
        })
      }
    />
  )
}

export default CommentsPageWithData
