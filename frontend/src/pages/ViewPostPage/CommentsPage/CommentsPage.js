import React, { useEffect } from 'react'
import {
  CommentsContainer,
  CommentCreatedAt,
  CommentBody,
  CommentHeader,
  UserName
} from '../styles'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate'

function CommentsPage(props) {
  // const { editComment } = useMutation(EDIT_COMMENT_MUTATION)
  const { subscribeToNewComments } = props
  const { comments } = props.data.post

  useEffect(() => {
    subscribeToNewComments()
  }, [subscribeToNewComments])

  if (comments.length === 0) {
    return <div>No Comments Yet</div>
  }
  return (
    <>
      {comments.map(comment => (
        <CommentsContainer key={comment.id}>
          <CommentHeader>
            <UserName to={`/r/profile/${comment.author.username}`}>
              {' '}
              <strong>{comment.author.username}</strong>
            </UserName>
            <CommentCreatedAt>
              {timeDifferenceForDate(comment.createdAt)}
            </CommentCreatedAt>
          </CommentHeader>

          <CommentBody>{comment.body}</CommentBody>
        </CommentsContainer>
      ))}
    </>
  )
}

export default CommentsPage
