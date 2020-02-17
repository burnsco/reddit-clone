import React from 'react'
import { PostContainer } from './styles.js'

const Post = ({ post: { description, url } }) => {
  return (
    <PostContainer>
      <p>Description: {description} </p>
      <p>Url: {url}</p>
    </PostContainer>
  )
}

export default Post
