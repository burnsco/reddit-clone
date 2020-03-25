import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import {
  InputCommentBox,
  InputCommentFooter,
  Container,
  SubmitCommentButton
} from './styles'
import MainSpinner from '../shared/FallBackSpinner'
import { SUBMIT_COMMENT } from './mutation'
import NoAuth from './noAuth'
import { CURRENT_USER } from '../Header/query'
import { COMMENTS_QUERY } from '../../pages/ViewPostPage/query'

const CreateCommentForm = ({ postID, refetch }) => {
  const [comment, setComment] = useState('')

  const [createComment, { loading, error }] = useMutation(SUBMIT_COMMENT, {
    variables: {
      body: comment,
      postID: postID
    }
  })

  const handleChange = e => {
    setComment(e.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const comment = await createComment()

      const { message, code, success } = comment.data.createComment

      if (code === '200') {
        refetch()
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

  return (
    <>
      <Container>
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
            {comment.length > 2 && (
              <SubmitCommentButton type="submit">Submit</SubmitCommentButton>
            )}
          </InputCommentFooter>
        </form>
      </Container>
    </>
  )
}

export default CreateCommentForm
