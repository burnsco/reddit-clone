import React from 'react'

function EditComment({ commentID, onEdit, comment }) {
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
