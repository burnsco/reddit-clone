import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import Spinner from '../shared/FallBackSpinner'
import { PostListContainer } from '../PostList/styles'
import CreateCommentForm from '../CreateComment/index'
import { CommentsContainer } from './styles'
import Post from '../Post'

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
      <Post post={post} style={{ marginBottom: 20 + 'rpx' }} />

      {/* COMMENT COMPONENT */}
      <CreateCommentForm postID={postID} />

      {post.comments.map(comment => (
        <CommentsContainer key={comment.id}>
          <p>
            <strong>{comment.author.username}</strong>
          </p>
          <p>{comment.body}</p>
        </CommentsContainer>
      ))}
    </PostListContainer>
  )
}

export default Comments
