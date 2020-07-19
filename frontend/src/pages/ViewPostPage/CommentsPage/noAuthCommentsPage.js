import React, { useEffect } from 'react'
import {
  CommentsContainer,
  CommentCreatedAt,
  CommentBody,
  CommentHeader,
  UserName,
} from '../styles'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate'
import { CommentFooter } from './styles'

function CommentsPage(props) {
  const { subscribeToNewComments } = props
  // eslint-disable-next-line react/destructuring-assignment
  const { comments } = props.data.post

  useEffect(() => {
    const unsubscribe = subscribeToNewComments()
    return function cleanUp() {
      unsubscribe()
    }
  }, [subscribeToNewComments])

  return (
    <>
      {comments.map((comment) => (
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
          <CommentFooter />
        </CommentsContainer>
      ))}
    </>
  )
}
export default CommentsPage
