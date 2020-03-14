import React from 'react'
import { useQuery, updateQuery, gql } from '@apollo/client'
import { COMMENTS_QUERY } from './query'
import { COMMENTS_SUBSCRIPTION } from './subscription'
import MainSpinner from '../shared/FallBackSpinner'
import CommentsPage from './CommentsPage'

function CommentsPageWithData({ postID }) {
  const { subscribeToMore, loading, error, ...result } = useQuery(
    COMMENTS_QUERY,
    {
      variables: { postID: postID }
    }
  )

  if (loading) return <MainSpinner />
  if (error) return <div>error</div>

  return (
    <CommentsPage
      {...result}
      subscribeToNewComments={() =>
        subscribeToMore({
          document: COMMENTS_SUBSCRIPTION,
          variables: { postID: postID },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev
            const newFeedItem = subscriptionData.data.commentAdded.node
            return Object.assign({}, prev, {
              post: {
                comments: [newFeedItem, ...prev.post.comments]
              }
            })
          }
        })
      }
    />
  )
}

export default CommentsPageWithData
