import React from 'react'
import {
  PostContainer,
  VoteBoxContainer,
  PostDetailsContainer
} from './styles.js'
import VoteBox from '../VoteBox/index.js'

const Post = ({ post: { title, url, comments, category, author, votes } }) => {
  return (
    <PostContainer>
      <VoteBoxContainer>
        <VoteBox votes={votes} />
      </VoteBoxContainer>
      <PostDetailsContainer>
        <p>{title} </p>
        <p>{url}</p>
        <p>
          {comments} comments--{category}--{author}--3M ago
        </p>
      </PostDetailsContainer>
    </PostContainer>
  )
}

export default Post
