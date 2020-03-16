import React from 'react'
import Spinner from '../shared/FallBackSpinner'
import { PostListContainer } from '../PostList/styles'
import CreateCommentForm from '../CreateComment/index'
import { CommentsContainer } from './styles'
import { PostPage } from './PostPage'
import CommentsPageWithData from './CommentsPageWithData'
import { GET_POST_AND_COMMENTS } from './query'
import PostPageWithData from './PostPageWithData'

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
