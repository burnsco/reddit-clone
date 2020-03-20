import React from 'react'
import { useQuery } from '@apollo/client'
import Post from '../../../components/Post'
import PostPage from './PostPage'
import { GET_POST_AND_COMMENTS_QUERY } from '../query'
import MainSpinner from '../../../components/shared/FallBackSpinner'

function PostPageWithData({ postID }) {
  const { error, loading, data } = useQuery(GET_POST_AND_COMMENTS_QUERY, {
    variables: { postID: postID }
  })
  if (loading) return <MainSpinner />
  if (error) return <div>Error</div>

  return <PostPage key={data.post.id} post={data.post} />
}
export default PostPageWithData
