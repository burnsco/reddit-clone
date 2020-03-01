import React, { useEffect } from 'react'
import { CommentsContainer } from '../../../components/Comments/styles'

function CommentsPage({ result }) {
  // useEffect(() => {
  //   result.subscribeToNewComments()
  // }, [result])
  console.log(result)
  return (
    <>
      <div>comments page</div>
      {/* {result.data.comments.map(comment => (
        <CommentsContainer key={comment.id}>
          <p>
            <strong>{comment.author.username}</strong>
          </p>
          <p>{comment.body}</p>
        </CommentsContainer>
      ))} */}
    </>
  )
}

export default CommentsPage
