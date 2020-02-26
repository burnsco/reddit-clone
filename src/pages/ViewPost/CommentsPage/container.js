import React from 'react'
import CommentsPage from './index'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const COMMENTS_QUERY = gql``

function CommentsPageWithData({ postID }) {
  const result = useQuery(COMMENTS_QUERY, { variables: { postID: postID } })
  return <CommentsPage {...result} />
}

export default CommentsPageWithData
