import React from 'react'
import { PostListContainer } from './styles'
import Post from '../Post'
import { useQuery } from '@apollo/react-hooks'
import { CreatePostInput } from '../CreatePost/input/styles'
import { POSTS_QUERY } from './query'

function PostList({ category }) {
  const { loading, error, data } = useQuery(POSTS_QUERY)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <PostListContainer>
      <CreatePostInput />
      {data.feed.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default PostList
