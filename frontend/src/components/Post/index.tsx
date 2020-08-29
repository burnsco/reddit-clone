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
  UserName
} from './styles'
import VoteBox from '../VoteBox/index.js'
import { timeDifferenceForDate } from '../../utils/timeDifferenceForDate'
import formatCommentText from '../../utils/comments'
import checkForLink from '../../utils/checkForLink'
import { Post } from '../../generated/graphql'

const PostPage: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <PostContainer>
      <VoteBoxContainer>
        <VoteBox score={post.score} postID={post.id} />
      </VoteBoxContainer>

      <PostDetailsContainer>
        <PostDetailsHeader>
          <PostCategory>
            <Link style={{ color: 'black' }} to={`/r/${post.category.name}`}>
              /r/{post.category.name}
            </Link>{' '}
          </PostCategory>
          <PostedBy>
            Posted by{' '}
            <UserName to={`/profile/${post.author.id}`}>
              {post.author.username}{' '}
            </UserName>
            {timeDifferenceForDate(post.createdAt)}
          </PostedBy>
        </PostDetailsHeader>

        <PostTitle>{checkForLink(post.title)}</PostTitle>

        <PostText>{post.text}</PostText>

        <PostFooter>
          <PostComments>
            <Link
              to={`/r/${post.category.name}/${post.id}/comments`}
              style={{ color: 'grey' }}
            >
              <CommentIcon />
              {post.comments.length}
              {formatCommentText(post.comments.length)}
            </Link>
          </PostComments>
        </PostFooter>
      </PostDetailsContainer>
    </PostContainer>
  )
}

export default PostPage
