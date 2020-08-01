import React from 'react'

// TODO fix this in the cache

function EditComment({ onEdit }) {
  return (
    <>
      <button
        onClick={() => {
          onEdit.setShowComment(!onEdit.showComment)
        }}
      >
        Edit
      </button>
    </>
  )
}

export default EditComment
