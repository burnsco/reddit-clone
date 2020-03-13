import React from 'react'
import { COMMENTS_SUBSCRIPTION } from './LatestComment'

function CommentsPageWithData({ postID }) {
  const result = useQuery(COMMENTS_QUERY, { variables: { postID: postID } })

  return (
    <CommentsPage
      {...result}
      subscribeToNewComments={() =>
        subscribeToMore({
          document: COMMENTS_SUBSCRIPTION,
          variables: { postID: postID },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev
            const newFeedItem = subscriptionData.data.comment
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
