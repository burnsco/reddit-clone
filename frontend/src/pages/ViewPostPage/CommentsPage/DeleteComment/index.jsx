import React from 'react'
import { useMutation } from '@apollo/client'

function DeleteComment() {
  const [deleteComment, { error }] = useMutation(DELETE_COMMENT_MUTATION)
}

export default DeleteComment
