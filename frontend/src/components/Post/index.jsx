import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { FaCommentAlt } from 'react-icons/fa'
import {
  PostContainer,
  VoteBoxContainer,
  PostDetailsContainer,
  PostTitle,
  PostText,
  PostFooter,
  PostComments,
  PostCategory,
  PostDetailsHeader,
  PostedBy,
  UserName,
} from './styles'
import VoteBox from '../VoteBox/index'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate'

const CommentIcon = styled(FaCommentAlt)`
  color: grey;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`

const Post = ({
  post: {
    id,
    title,
    text,
    votes,
    category: { name },
    comments,
    createdAt,
    author: { username },
    author: { id: userID },
  },
}) => (
  <PostContainer>
    <VoteBoxContainer>
      <VoteBox votes={votes} postID={id} />
    </VoteBoxContainer>

    <PostDetailsContainer>
      <PostDetailsHeader>
        <PostCategory>
          <Link style={{ color: 'black' }} to={`/r/${name}`}>
            /r/{name}
          </Link>{' '}
        </PostCategory>
        <PostedBy>
          Posted by <UserName to={`/profile/${userID}`}>u/{username} </UserName>
          {timeDifferenceForDate(createdAt)}
        </PostedBy>
      </PostDetailsHeader>
      <PostTitle>{title}</PostTitle>

      <PostText>{text}</PostText>

      <PostFooter>
        <PostComments>
          {' '}
          <Link to={`/r/${name}/${id}/comments`} style={{ color: 'grey' }}>
            <CommentIcon />
            {comments.length}{' '}
            {comments.length < 10 && comments.length !== 0 ? 'comment' : 'comments'}
          </Link>
        </PostComments>
      </PostFooter>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
