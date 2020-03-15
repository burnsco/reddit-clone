import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { InputCommentBox, InputCommentFooter } from './styles'

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
  const [comment, setComment] = useState('')
  const [createComment, { loading, error }] = useMutation(SUBMIT_COMMENT, {
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

export default CreateCommentForm
