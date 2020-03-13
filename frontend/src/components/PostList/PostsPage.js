import React, { useEffect } from 'react'
import { PostListContainer } from './styles'
import Post from '../Post'

function PostsPage(props) {
  useEffect(() => {
    props.subscribeToNewPosts()
  }, [])

  console.log(props)

  return (
    <PostListContainer>
      {props.data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default PostsPage
