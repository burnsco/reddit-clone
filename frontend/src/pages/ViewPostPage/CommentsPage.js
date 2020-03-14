import React, { useEffect } from 'react'
import { CommentsContainer } from './styles'

function CommentsPage(props) {
  const { subscribeToNewComments } = props
  const { comments } = props.data.post

  useEffect(() => {
    subscribeToNewComments()
  }, [props])
  return (
    <>
      {comments.map(comment => (
        <CommentsContainer key={comment.id}>
          <p>
            <strong>{comment.author.username}</strong>
          </p>
          <p>{comment.body}</p>
        </CommentsContainer>
      ))}
    </>
  )
}

export default CommentsPage
