import React from 'react'
import { COMMENTS_SUBSCRIPTION } from './LatestComment'
import { useQuery, updateQuery, gql } from '@apollo/client'
import CommentsPage from './CommentsPage'

export const COMMENTS_QUERY = gql`
  query CommentsForPost($postID: ID!) {
    post(postID: $postID) {
      comments {
        id
        body
        author {
          username
        }
      }
    }
  }
`

function CommentsPageWithData({ postID }) {
  const { subscribeToMore, ...result } = useQuery(COMMENTS_QUERY, {
    variables: { postID: postID }
  })

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
