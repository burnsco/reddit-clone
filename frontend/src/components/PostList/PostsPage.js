import React, { useEffect } from 'react'
import Post from '../Post'
import { PostListContainer } from './styles'

function PostsPage(data) {
  const { subscribeToNewPosts } = data
  useEffect(() => {
    subscribeToNewPosts()
  }, [subscribeToNewPosts])

  if (data.posts.length === 0) {
    return <div>No posts here</div>
  }

  return (
    <PostListContainer>
      {data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default PostsPage
