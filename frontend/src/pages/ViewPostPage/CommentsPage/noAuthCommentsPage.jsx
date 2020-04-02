import React, { useEffect } from 'react'
import {
  CommentsContainer,
  CommentCreatedAt,
  CommentBody,
  CommentHeader,
  UserName
} from '../styles'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate'
import { CommentFooter } from './styles'
import DeleteComment from './DeleteComment'
import CreateCommentForm from '../../../components/CreateComment'

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
      {comments.map(comment => (
        <CommentsContainer key={`comment-${comment.id}-${comment.body}`}>
          <CommentHeader>
            <UserName to={`/r/profile/${comment.createdBy.username}`}>
              {' '}
              <strong>{comment.createdBy.username}</strong>
            </UserName>
            <CommentCreatedAt>
              {timeDifferenceForDate(comment.createdAt)}
            </CommentCreatedAt>
          </CommentHeader>

          <CommentBody>{comment.body}</CommentBody>
          <CommentFooter></CommentFooter>
        </CommentsContainer>
      ))}
    </>
  )
}

export default CommentsPage
