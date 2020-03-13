import React, { useEffect } from 'react'
import { PostListContainer } from './styles'
import Post from '../Post'
import MainSpinner from '../shared/FallBackSpinner'

function PostsPage(data) {
  console.log('posts page data')

  console.log(data)

  useEffect(() => {
    data.subscribeToNewPosts()
  }, [])

  return (
    <PostListContainer>
      {data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default PostsPage
