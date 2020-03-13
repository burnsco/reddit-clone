import React from 'react'
import CommentsPage from './index'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

const COMMENTS_QUERY = gql`
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

const COMMENTS_SUBSCRIPTION = gql`
  subscription onCommentCreated($postID: ID!) {
    commentAdded(postID: $postID) {
      id
      body
      author {
        username
      }
    }
  }
`

const CommentsPageWithData = postID => {
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
            const newComment = subscriptionData.data.commentCreated
            return Object.assign({}, prev, {
              post: {
                comments: [newComment, ...prev.post.comments]
              }
            })
          }
        })
      }
    />
  )
}

export default CommentsPageWithData
