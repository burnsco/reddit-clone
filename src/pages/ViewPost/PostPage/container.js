import React from 'react'
import PostPage from './index'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const POST_QUERY = gql``

function PostPageWithData({ postID }) {
  const result = useQuery(POST_QUERY, { variables: { postID: postID } })
  return <PostPage {...result} />
}

export default PostPageWithData
