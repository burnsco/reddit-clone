import React from 'react'
import Box from '../../../../styles/components/Box'

// TODO fix this in the cache

function EditComment({ onEdit }) {
  return (
    <>
      <Box
        ml="2"
        as="button"
        onClick={() => {
          onEdit.setShowComment(!onEdit.showComment)
        }}
      >
        Edit
      </Box>
    </>
  )
}

export default EditComment
