import React from 'react'
import CreateCommentForm from '../../components/CreateComment'
import CommentsPageWithData from './CommentsPage/CommentsPageWithData'
import PostPageWithData from './PostPage/PostPageWithData'
import { PostAndCommentsContainer } from './styles'

function PostAndCommentsPage({ postID }) {
  return (
    <PostAndCommentsContainer>
      <PostPageWithData postID={postID} />

      <CommentsPageWithData postID={postID} />
    </PostAndCommentsContainer>
  )
}

export default PostAndCommentsPage
