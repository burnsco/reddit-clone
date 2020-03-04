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
    category: { name },
    comments,
    author: { username }
  }
}) => (
  <PostContainer>
    <VoteBoxContainer>
      <VoteBox votes="4" />
    </VoteBoxContainer>
    <PostDetailsContainer>
      <p>
        <strong>{title} </strong>
      </p>
      <p>{url}</p>
      <p>
        {/* <Link to={`/r/${category}/${id}/comments`}>
          {comments.length} {comments.length > 1 ? 'comments' : 'comment'}
        </Link> */}
        --/r/{name}--{username}--3M ago
      </p>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
