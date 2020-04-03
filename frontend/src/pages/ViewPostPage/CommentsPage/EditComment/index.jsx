import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useMutation } from '@apollo/client'
import { EDIT_COMMENT_MUTATION } from './mutation'
import MainSpinner from '../../../../components/shared/FallBackSpinner'

function EditComment({ commentID, postID, refetch }) {
  // const [updateComment, { error, loading, data }] = useMutation(
  //   EDIT_COMMENT_MUTATION,
  //   {
  //     variables: { commentID: commentID, postID: postID },
  //   }
  // )
  // if (loading) return <MainSpinner />
  // if (error) {
  //   console.log(error)
  // }

  return (
    <>
      <button
        onClick={() => {
          console.log(`asdfsdf ${commentID} ??`)
        }}
      >
        Edit
      </button>
    </>
  )
}

export default EditComment
