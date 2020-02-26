import React, { useEffect } from 'react'
import { CommentsContainer } from '../../../components/Comments/styles'

function CommentsPage(props) {
  useEffect(() => {
    props.subscribeToNewComments()
  }, [props])
  const [comments] = props.post

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
