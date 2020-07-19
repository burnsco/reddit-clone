import React from 'react'
import { useQuery } from '@apollo/client'
import CommentsPage from './noAuthCommentsPage'
import MainSpinner from '../../../components/shared/FallBackSpinner'
import { GET_COMMENTS_QUERY } from '../../../graphql/Query/comments'
import { COMMENTS_SUBSCRIPTION } from '../../../graphql/Subscription/comments'
import ErrorBoundary from '../../../utils/ErrorBoundary'

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
    notifyOnNetworkStatusChange: true,
  })
  if (networkStatus === 4) return <MainSpinner />
  if (loading) return <MainSpinner />
  if (error) return <div>error</div>

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default CommentsPageWithData
