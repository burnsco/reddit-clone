import React, { useEffect } from 'react'
import { PostListContainer } from '../styles'
import Post from '../../Post/Post'

function PostsPage(data) {

  if (data.posts.length === 0) {
    return <div>No posts submitted.</div>
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
