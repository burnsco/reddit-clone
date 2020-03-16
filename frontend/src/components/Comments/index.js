import React from 'react'
import { PostListContainer } from '../PostList/styles'
import CreateCommentForm from '../CreateComment/index'
import CommentsPageWithData from './CommentsPageWithData'
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
