import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST_AND_COMMENTS_QUERY } from './query'
import MainSpinner from '../shared/FallBackSpinner'
import Post from '../Post'

function PostPageWithData({ postID }) {
  const { error, loading, data } = useQuery(GET_POST_AND_COMMENTS_QUERY, {
    variables: { postID: postID }
  })
  if (loading) return <MainSpinner />
  if (error) {
    console.log(error)
    return <div>Error</div>
  }

  return <Post key={data.post.id} post={data.post} />
}
export default PostPageWithData
