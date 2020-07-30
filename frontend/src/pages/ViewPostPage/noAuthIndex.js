import React from 'react'
import CommentsPageWithData from './CommentsPage/noAuthCommentsPageWithData'
import PostPageWithData from './PostPage/PostPageWithData'
import { PostAndCommentsContainer } from './styles'

function NoAuthPostAndCommentsPage({ postID }) {
  return (
    <PostAndCommentsContainer>
      <PostPageWithData postID={postID} />

      <CommentsPageWithData postID={postID} />
    </PostAndCommentsContainer>
  )
}

export default NoAuthPostAndCommentsPage
