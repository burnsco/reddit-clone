import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useMutation } from '@apollo/client'
import { EDIT_COMMENT_MUTATION } from './mutation'
import MainSpinner from '../../../../components/shared/FallBackSpinner'

function EditComment({ commentID, postID, refetch, onEdit, comment }) {
  return (
    <>
      <button
        onClick={() => {
          onEdit.setShowComment(!onEdit.showComment)
          console.log(`ID =  ${commentID}`)
          console.log(`BODY = ${comment}`)
        }}
      >
        Edit
      </button>
    </>
  )
}

export default EditComment
