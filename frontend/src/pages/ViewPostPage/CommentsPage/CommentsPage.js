import React, { useEffect } from 'react'
import CreateCommentForm from '../../../components/CreateComment'
import CommentComponent from './Comment'

function CommentsPage(props) {
  const { subscribeToNewComments, data } = props
  const { comments } = data.post
  const { postID, refetch } = props

  useEffect(() => {
    const unsubscribe = subscribeToNewComments()
    return function cleanUp() {
      unsubscribe()
    }
  }, [subscribeToNewComments])

  return (
    <>
      <CreateCommentForm refetch={refetch} postID={postID} />

      {comments.map((comment) => (
        <CommentComponent
          postID={postID}
          refetch={refetch}
          comment={comment}
          key={`comment-#${comment.id}-${comment.body}`}
        />
      ))}
    </>
  )
}

export default CommentsPage
