import React from 'react'
import { Link } from '@reach/router'
import styled from '@xstyled/styled-components'
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
  PostDetailsHeader,
  PostedBy
} from './styles.js'
import VoteBox from '../VoteBox/index.js'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate.js'
import { CommentAlt } from '@styled-icons/fa-solid'

const CommentIcon = styled(CommentAlt)`
  color: grey;
  width: 15rpx;
  height: 15rpx;
  margin-right: 10rpx;
`

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
        <PostCategory> /r/{name}</PostCategory>
        <PostedBy>
          Posted by u/{username} {timeDifferenceForDate(createdAt)}
        </PostedBy>
      </PostDetailsHeader>
      <PostTitle>{title}</PostTitle>

      <PostText>{text}</PostText>

      <PostFooter>
        <PostComments>
          {' '}
          <Link to={`/r/${name}/${id}/comments`}>
            <CommentIcon />
            {comments.length} comments
          </Link>
        </PostComments>
      </PostFooter>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
