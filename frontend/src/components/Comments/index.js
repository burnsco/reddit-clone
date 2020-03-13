import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import Spinner from '../shared/FallBackSpinner'
import { PostListContainer } from '../PostList/styles'
import CreateCommentForm from '../CreateComment/index'
import { CommentsContainer } from './styles'
import Post from '../Post'
import LatestComment from './LatestComment'
import CommentsPageWithData from './CommentsData'

const GET_POST_AND_COMMENTS = gql`
  query getPostsAndComments($postID: ID!) {
    post(postID: $postID) {
      id
      title
      text
      createdAt
      category {
        name
      }
      author {
        username
      }
      comments {
        id
        body
        author {
          username
        }
      }
    }
  }
`

function Comments({ postID }) {
  const { loading, error, data } = useQuery(GET_POST_AND_COMMENTS, {
    variables: { postID: postID }
  })

  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  const { post } = data

  return (
    <PostListContainer>
      {/* POST COMPONENT */}
      <Post post={post} style={{ marginBottom: 20 + 'rpx' }} />

      {/* CREATE COMMENT COMPONENT */}
      <CreateCommentForm postID={postID} />

      {/* COMMENTS COMPONENT WITH FETCH */}
      <CommentsPageWithData postID={postID} />
    </PostListContainer>
  )
}

export default Comments
