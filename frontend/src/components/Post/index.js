import React from 'react'
import { Link } from '@reach/router'
import {
  PostContainer,
  VoteBoxContainer,
  PostDetailsContainer,
  PostTitle,
  PostLink,
  PostFooter,
  PostComments,
  PostCategory,
  PostAuthor,
  PostDateCreated
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
      <PostTitle>{title}</PostTitle>
      <PostLink>{url}</PostLink>
      <PostFooter>
        <PostComments>
          {' '}
          <Link to={`/r/${name}/${id}/comments`}>1 comments</Link>
        </PostComments>
        <PostCategory> /r/{name}</PostCategory>

        <PostAuthor>{username}</PostAuthor>
        <PostDateCreated>{timeDifferenceForDate(createdAt)}</PostDateCreated>
      </PostFooter>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
