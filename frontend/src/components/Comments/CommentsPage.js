import React, { useEffect } from 'react'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate'
import { CommentsContainer, PostCommentHeader, PostCommentBody } from './styles'
import { Link } from '@reach/router'

function CommentsPage(props) {
  const { subscribeToNewComments } = props
  const { comments } = props.data.post

  useEffect(() => {
    subscribeToNewComments()
  }, [subscribeToNewComments])
  return (
    <>
      {comments.map(comment => (
        <CommentsContainer key={comment.id}>
          <PostCommentHeader
            style={{ color: 'black', fontWeight: '600' }}
            to={`/r/profile/${comment.author.username}`}
          >
            {comment.author.username}
          </PostCommentHeader>{' '}
          {timeDifferenceForDate(comment.createdAt)}
          <PostCommentBody>
            <p>{comment.body}</p>
          </PostCommentBody>
        </CommentsContainer>
      ))}
    </>
  )
}

export default CommentsPage
