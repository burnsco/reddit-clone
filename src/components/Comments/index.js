import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Spinner from '../shared/FallBackSpinner'
import { PostListContainer } from '../PostList/styles'
import { CommentsContainer } from './styles'
import { GET_POST_AND_COMMENTS } from './query'
import Post from '../Post'

// Visit this via /r/${category}/comments/${postID}
// then push the post into the post container
// then push the comments in a list beneath the post

function Comments({ postID }) {
  const { loading, error, data } = useQuery(GET_POST_AND_COMMENTS, {
    variables: { postID: postID }
  })

  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  const { post } = data
  console.log(post.comments)
  console.log(post)
  return (
    <PostListContainer>
      <Post post={post} />
      <br />
      <textarea
        placeholder='Comment box with submission'
        cols='30'
        rows='5'
      ></textarea>

      {/* TODO refactor this obviously */}

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
