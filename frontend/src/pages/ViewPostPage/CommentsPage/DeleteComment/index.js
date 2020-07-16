import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useMutation } from '@apollo/client'
import { DELETE_COMMENT_MUTATION } from './mutation'

function DeleteComment({ commentID, postID, refetch }) {
  const [deleteComment, { error }] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: { commentID, postID },
  })

  const options = {
    title: 'Delete Comment',
    message: 'Are you sure?',
    buttons: [
      {
        label: 'Yes',
        onClick: async () => {
          await deleteComment()
          await refetch()
        },
      },
      {
        label: 'No',
        onClick: async () => {
          await refetch()
        },
      },
    ],

    closeOnEscape: true,
    closeOnClickOutside: true,
    willUnmount: () => {},
    afterClose: () => {},
    onClickOutside: () => {},
    onKeypressEscape: () => {},
  }

  if (error) {
    console.log(error)
  }

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          await confirmAlert(options)
        }}
      >
        Delete
      </button>
    </>
  )
}

export default DeleteComment
