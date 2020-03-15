import React, { useEffect } from 'react'
import { PostListContainer } from '../styles'
import Post from '../../Post'
import MainSpinner from '../../shared/FallBackSpinner'

function PostsPage(data) {
  useEffect(() => {
    data.subscribeToNewPosts()
  }, [data])

  return (
    <PostListContainer>
      {data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default PostsPage
