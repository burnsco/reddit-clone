import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'

function CommentsPageWithData({ postID }) {
  const result = useLazyQuery(COMMENTS_QUERY, { variables: { postID: postID } })
  return <CommentsPage {...result} />
}

export default CommentsPageWithData
