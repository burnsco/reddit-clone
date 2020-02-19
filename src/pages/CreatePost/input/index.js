import React from 'react'
import { CreatePostContainer, CreatePostInput } from './styles'

const CreatePost = () => {
  return (
    <CreatePostContainer>
      <CreatePostInput type="text" placeholder="Create Post" />
    </CreatePostContainer>
  )
}

export default CreatePost
