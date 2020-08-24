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
  CommentIcon,
  PostCategory,
  PostDetailsHeader,
  PostedBy,
  UserName,
} from './styles'
import VoteBox from '../VoteBox/index.js'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate'
import formatCommentText from '../../utils/comments'
import checkForLink from '../../utils/checkForLink'

const Post = ({
  post: {
    id,
    title,
    text,
    score,
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
          Posted by <UserName to={`/profile/${userID}`}>{username} </UserName>
          {timeDifferenceForDate(createdAt)}
        </PostedBy>
      </PostDetailsHeader>

      <PostTitle>{checkForLink(title)}</PostTitle>

      <PostText>{text}</PostText>

      <PostFooter>
        <PostComments>
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
