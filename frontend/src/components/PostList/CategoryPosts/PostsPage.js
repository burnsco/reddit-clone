import React, { useEffect } from 'react'
import { PostListContainer } from '../styles'
import Post from '../../Post'

function PostsPage(data) {
  useEffect(() => {
    data.subscribeToNewPosts()
  }, [data])

  if (data.posts.length === 0) {
    return <div>No posts here</div>
  }

  return (
    <PostListContainer>
      {data.posts.map(post => (
        <Post key={post.id} post={post} currentUser={data.currentUser} />
      ))}
    </PostListContainer>
  )
}

export default PostsPage
