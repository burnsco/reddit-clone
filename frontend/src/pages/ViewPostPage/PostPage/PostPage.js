import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import { CommentAlt } from '@styled-icons/fa-solid'
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
} from '../styles.js'
import VoteBox from '../VoteBox'
import formatCommentText from '../../../utils/comments.js'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate.js'
import checkForLink from '../../../utils/checkForLink.js'

const CommentIcon = styled(CommentAlt)`
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
    score,
    category: { name },
    comments,
    createdAt,
    updatedAt,
    author: { username },
    author: { id: userID },
  },
}) => (
  <PostContainer>
    <VoteBoxContainer>
      <VoteBox votes={votes} score={score} postID={id} />
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
          {timeDifferenceForDate(createdAt, updatedAt)}
        </PostedBy>
      </PostDetailsHeader>
      <PostTitle>{checkForLink(title)}</PostTitle>
      <PostText>{text}</PostText>
      <PostFooter>
        <PostComments>
          {' '}
          <Link to={`/r/${name}/${id}/comments`} style={{ color: 'grey' }}>
            <CommentIcon />
            {comments.length}
            {formatCommentText(comments.length)}
          </Link>
        </PostComments>
      </PostFooter>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
