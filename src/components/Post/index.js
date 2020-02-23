import React from 'react'
import { Link } from '@reach/router'
import {
  PostContainer,
  VoteBoxContainer,
  PostDetailsContainer
} from './styles.js'
import VoteBox from '../VoteBox/index.js'

const Post = ({
  post: {
    id,
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
        <Link to={`/r/${category}/${id}/comments`}>{5} comments</Link>
        --{category}--{username}--3M ago
      </p>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
