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
          <CommentFooter>
            <button>Edit</button>
            <button
              onClick={() => console.log(`deleted comment ${comment.id}`)}
            >
              Delete
            </button>
          </CommentFooter>
        </CommentsContainer>
      ))}
    </>
  )
}

export default CommentsPage
