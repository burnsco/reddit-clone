import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import Spinner from '../shared/FallBackSpinner'
import { PostListContainer } from '../PostList/styles'
import {
  CommentsContainer,
  InputCommentBox,
  InputCommentFooter
} from './styles'
import Post from '../Post'

const GET_POST_AND_COMMENTS = gql`
  query getPostsAndComments($postID: ID!) {
    post(postID: $postID) {
      id
      title
      url
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
  const [comment, setComment] = useState('')
  const { loading, error, data } = useQuery(GET_POST_AND_COMMENTS, {
    variables: { postID: postID }
  })

  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  const { post } = data

  const handleChange = e => {
    setComment(e.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    console.log(comment)
  }

  return (
    <PostListContainer>
      <Post post={post} />
      <br />
      <form onSubmit={handleSubmit}>
        <InputCommentBox
          value={comment}
          onChange={handleChange}
          style={{ background: 'white' }}
          contentEditable='true'
          role='textbox'
          spellCheck='true'
          placeholder='Comment box with submission'
          height='300'
          width='300'
        ></InputCommentBox>
        <InputCommentFooter>
          <button>Submit</button>
        </InputCommentFooter>
      </form>

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
