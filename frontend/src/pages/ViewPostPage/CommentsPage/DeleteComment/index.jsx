import React from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_COMMENT_MUTATION } from './mutation'

function DeleteComment({ commentID, postID, refetch }) {
  console.log(`commentID = ${commentID}, postID = ${postID}`)
  const [deleteComment, { error }] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: { commentID: commentID, postID: postID }
  })

  return (
    <>
      <button
        onClick={async () => {
          await deleteComment()
          await refetch()
          console.log('deleted comment')
        }}
      >
        Delete
      </button>
    </>
  )
}

export default DeleteComment
