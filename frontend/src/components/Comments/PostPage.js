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
  PostDateCreated
} from './styles.js'
import VoteBox from '../VoteBox/index.js'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate.js'

const Post = ({
  data: {
    id,
    title,
    text,
    votes,
    category: { name },
    comments,
    createdAt,
    author: { username }
  }
}) => (
  <PostContainer>
    <VoteBoxContainer>
      <VoteBox votes={votes} postID={id} />
    </VoteBoxContainer>

    <PostDetailsContainer>
      <PostTitle>{title}</PostTitle>
      <PostText>{text}</PostText>
      <PostFooter>
        <PostComments>
          {' '}
          <Link to={`/r/${name}/${id}/comments`}>
            {comments.length} comments
          </Link>
        </PostComments>
        <PostCategory> /r/{name}</PostCategory>

        <PostAuthor>{username}</PostAuthor>
        <PostDateCreated>{timeDifferenceForDate(createdAt)}</PostDateCreated>
      </PostFooter>
    </PostDetailsContainer>
  </PostContainer>
)

export default Post
