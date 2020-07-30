import { useQuery } from '@apollo/client'
import React from 'react'
import MainSpinner from '../../components/shared/FallBackSpinner'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'
import CommentsPageWithData from './CommentsPage/CommentsPageWithData'
import NoAuthPostAndCommentsPage from './noAuthIndex'
import PostPageWithData from './PostPage/PostPageWithData'
import { PostAndCommentsContainer } from './styles'

function PostAndCommentsPage({ postID }) {
  const { data, loading } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <MainSpinner />

  if (data && data.currentUser) {
    return (
      <PostAndCommentsContainer>
        <PostPageWithData postID={postID} />

        <CommentsPageWithData postID={postID} />
      </PostAndCommentsContainer>
    )
  }
  return <NoAuthPostAndCommentsPage postID={postID} />
}

export default PostAndCommentsPage
