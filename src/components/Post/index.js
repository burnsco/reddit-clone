import React from 'react'
import {
  PostContainer,
  VoteBoxContainer,
  PostDetailsContainer
} from './styles.js'
import VoteBox from '../VoteBox/index.js'

const Post = ({
  post: {
    title,
    url,
    category,
    author: { username },
    votes
  }
}) => (
  <PostContainer>
    <VoteBoxContainer>
      <VoteBox votes={votes} />
    </VoteBoxContainer>
    <PostDetailsContainer>
      <p>
        <strong>{title} </strong>
      </p>
      <p>{url}</p>
      <p>
        {5} comments--{category}--{username}--3M ago
      </p>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
