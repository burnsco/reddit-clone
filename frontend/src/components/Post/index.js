import React from 'react'
import { Link } from '@reach/router'
import {
  PostContainer,
  VoteBoxContainer,
  PostDetailsContainer,
  PostTitle,
  PostText,
  PostFooter,
  PostComments,
  PostCategory,
  PostAuthor,
  PostDateCreated,
  PostDetailsHeader
} from './styles.js'
import VoteBox from '../VoteBox/index.js'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate.js'

const Post = ({
  post: {
    id,
    title,
    text,
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
      <PostDetailsHeader>
        <PostCategory> /r/{name} --- </PostCategory> Posted by u/{username}{' '}
        {timeDifferenceForDate(createdAt)}
      </PostDetailsHeader>
      <PostTitle>{title}</PostTitle>

      <PostText>{text}</PostText>

      <PostFooter>
        <PostComments>
          {' '}
          <Link to={`/r/${name}/${id}/comments`}>
            {comments.length} comments
          </Link>
        </PostComments>
      </PostFooter>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
