import React, { useEffect, useState } from 'react'
import {
  CommentsContainer,
  CommentCreatedAt,
  CommentBody,
  CommentHeader,
  UserName,
} from '../styles'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate'
import { CommentFooter } from './styles'
import CreateCommentForm from '../../../components/CreateComment'
import CommentComponent from './Comment'

function CommentsPage(props) {
  const { subscribeToNewComments } = props
  const { comments } = props.data.post
  const { postID, refetch } = props

  useEffect(() => {
    const unsubscribe = subscribeToNewComments()
    return function cleanUp() {
      unsubscribe()
    }
  }, [subscribeToNewComments])

  return (
    <>
      <CreateCommentForm refetch={refetch} postID={postID} />

      {comments.map(comment => (
        <CommentComponent
          postID={postID}
          refetch={refetch}
          comment={comment}
          key={`comment-#${comment.id}-${comment.body}`}
        />
      ))}
    </>
  )
}

export default CommentsPage
