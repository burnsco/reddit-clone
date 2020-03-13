import React, { useEffect } from 'react'
import { CommentsContainer } from './styles'

function CommentsPage(props) {
  useEffect(() => {
    props.subscribeToNewComments()
  }, [props])
  console.log(props)
  const { post } = props.data
  return (
    <>
      {post.comments.map(comment => (
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
