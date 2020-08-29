import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useMutation } from '@apollo/client'
import { DELETE_COMMENT_MUTATION } from '../../../../graphql/Mutation/delete_comment'
import Box from '../../../../styles/components/Box'

function DeleteComment({ commentID, postID }) {
  const [deleteComment, { error }] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: { commentID, postID },
  })

  const options = {
    title: 'Delete Comment',
    message: 'Are you sure?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
          deleteComment()
       
        },
      },
      {
        label: 'No',
        onClick: () => {
         
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
      <Box
        ml="2"
        as="button"
        onClick={() => {
          confirmAlert(options)
        }}
      >
        Delete
      </Box>
    </>
  )
}

export default DeleteComment
