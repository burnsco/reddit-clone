import React, { useEffect } from 'react'
import { CommentsContainer, CommentCreatedAt, CommentBody } from './styles'
import { Link } from '@reach/router'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate'
import { UserIcon } from '../../components/Header/styles'

function CommentsPage(props) {
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
          <UserIcon style={{ color: 'grey' }} />
          <Link to={`/r/profile/${comment.author.username}`}>
            {' '}
            <strong>{comment.author.username}</strong>
          </Link>
          <CommentCreatedAt>
            {timeDifferenceForDate(comment.createdAt)}
          </CommentCreatedAt>

          <CommentBody>{comment.body}</CommentBody>
        </CommentsContainer>
      ))}
    </>
  )
}

export default CommentsPage
