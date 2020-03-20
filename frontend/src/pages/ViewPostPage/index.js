import React from 'react'
import CreateCommentForm from '../../components/CreateComment'
import CommentsPageWithData from './CommentsPageWithData'
import PostPageWithData from './PostPageWithData'
import { PostAndCommentsContainer } from './styles'

function PostAndCommentsPage({ postID }) {
  return (
    <PostAndCommentsContainer>
      <PostPageWithData postID={postID} />

      <CreateCommentForm postID={postID} />

      <CommentsPageWithData postID={postID} />
    </PostAndCommentsContainer>
  )
}

export default PostAndCommentsPage
