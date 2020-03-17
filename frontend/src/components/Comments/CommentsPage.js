import React, { useEffect } from 'react'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate'
import { CommentsContainer } from './styles'
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
          <p>
            <Link
              style={{ color: 'black', fontWeight: '600' }}
              to={`/r/profile/${comment.author.username}`}
            >
              {comment.author.username}
            </Link>{' '}
            {timeDifferenceForDate(comment.createdAt)}
          </p>
          <p>{comment.body}</p>
        </CommentsContainer>
      ))}
    </>
  )
}

export default CommentsPage
