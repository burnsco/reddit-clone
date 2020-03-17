import React, { useState } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { InputCommentBox, InputCommentFooter } from './styles'
import MainSpinner from '../shared/FallBackSpinner'
import { CURRENT_USER } from './query'
import NoAuth from './noAuth'

const SUBMIT_COMMENT = gql`
  mutation submitComment($body: String!, $postID: ID!) {
    createComment(data: { body: $body, postID: $postID }) {
      code
      success
      message
    }
  }
`

const CreateCommentForm = ({ postID }) => {
  const { loading, data } = useQuery(CURRENT_USER)
  const [comment, setComment] = useState('')
  const [createComment, { error }] = useMutation(SUBMIT_COMMENT, {
    variables: { body: comment, postID: postID }
  })
  const handleChange = e => {
    setComment(e.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const comment = await createComment()

      const { message, code, success } = comment.data.createComment

      console.log(message, code, success)
      if (code === '200') {
        setComment('')
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  if (error) {
    console.log(error)
    return <div>error</div>
  }

  if (loading) return <MainSpinner />

  if (data && data.currentUser) {
    return (
      <form onSubmit={handleSubmit}>
        <InputCommentBox
          as="textarea"
          value={comment}
          onChange={handleChange}
          style={{ background: 'white' }}
          role="textbox"
          spellCheck="true"
          placeholder="What are your thoughts"
          height="300"
          width="300"
        ></InputCommentBox>

        <InputCommentFooter>
          <button>Submit</button>
        </InputCommentFooter>
      </form>
    )
  }
  return <NoAuth />
}

export default CreateCommentForm
