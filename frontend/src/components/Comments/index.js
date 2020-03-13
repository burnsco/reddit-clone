import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import Spinner from '../shared/FallBackSpinner'
import { PostListContainer } from '../PostList/styles'
import CreateCommentForm from '../CreateComment/index'
import { CommentsContainer } from './styles'
import { PostPage } from './PostPage'
import CommentsPageWithData from './CommentsData'
import { GET_POST_AND_COMMENTS } from './query'

function PostAndCommentsPage({ postID }) {
  return (
    <PostListContainer>
      <PostPageWithData postID={postID} />

      <CreateCommentForm postID={postID} />

      <CommentsPageWithData postID={postID} />
    </PostListContainer>
  )
}

export default PostAndCommentsPage
