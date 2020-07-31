import React from 'react'
import { useQuery } from '@apollo/client'
import CommentsPage from './CommentsPage'
import MainSpinner from '../../../components/shared/FallBackSpinner'
import { GET_COMMENTS_QUERY } from '../../../graphql/Query/comments'
import { POSTS_SUBSCRIPTION } from '../../../graphql/Subscription/posts'

function CommentsPageWithData({ postID }) {
  const {
    subscribeToMore,
    loading,
    error,
    refetch,
    networkStatus,
    ...result
  } = useQuery(GET_COMMENTS_QUERY, {
    variables: { postID },
    pollInterval: 500,
  })
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
          document: POSTS_SUBSCRIPTION,
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
