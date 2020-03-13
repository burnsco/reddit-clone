import React from 'react'
import { gql, useSubscription } from '@apollo/client'
import MainSpinner from '../shared/FallBackSpinner'
import { CommentsContainer } from './styles'

export const COMMENTS_SUBSCRIPTION = gql`
  subscription onCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      node {
        id
        body
        author {
          username
        }
      }
    }
  }
`

function LatestComment({ postID }) {
  const { data, error, loading } = useSubscription(COMMENTS_SUBSCRIPTION, {
    variables: { postID: postID }
  })

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
  }

  return (
    <CommentsContainer key={data.comment.node.id}>
      <p>
        <strong>{data.comment.node.author.username}</strong>
      </p>
      <p>{data.comment.node.body}</p>
    </CommentsContainer>
  )
}

export default LatestComment
