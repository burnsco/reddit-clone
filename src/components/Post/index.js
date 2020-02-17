import React from 'react'
import {
  PostContainer,
  VoteBoxContainer,
  PostDetailsContainer
} from './styles.js'
import VoteBox from '../VoteBox/index.js'

const Post = ({ post: { title, url } }) => {
  return (
    <PostContainer>
      <VoteBoxContainer>
        <VoteBox />
      </VoteBoxContainer>
      <PostDetailsContainer>
        <p>{title} </p>
        <p>{url}</p>
      </PostDetailsContainer>
    </PostContainer>
  )
}

export default Post
