import React from 'react'
import { useQuery } from '@apollo/client'
import PostPage from './PostPage'
import MainSpinner from '../../../components/shared/FallBackSpinner'
import { GET_POST_AND_COMMENTS_QUERY } from '../../../graphql/Query/post_and_comments'

export default function PostPageWithData({ postID }) {
  const { error, loading, data } = useQuery(GET_POST_AND_COMMENTS_QUERY, {
    variables: { postID },
  })
  if (loading) return <MainSpinner />
  if (error) return <div>Error! Return whence you came</div>

  const { id } = data.post
  const { post } = data

  return <PostPage key={id} post={post} />
}
