import React from 'react'
import { Link } from '@reach/router'
import {
  PostContainer,
  VoteBoxContainer,
  PostDetailsContainer
} from './styles.js'
import VoteBox from '../VoteBox/index.js'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate.js'

const Post = ({
  post: {
    id,
    title,
    url,
    category: { name },
    comments,
    createdAt,
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
        <Link to={`/r/${name}/${id}/comments`}>1 comments</Link>
        --/r/{name}--{username}--{timeDifferenceForDate(createdAt)}
      </p>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
