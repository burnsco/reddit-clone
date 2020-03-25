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
  let input
  const [createComment, { loading, error, data }] = useMutation(SUBMIT_COMMENT)

  if (loading) return <MainSpinner />

  const handleSubmit = e => {
    e.preventDefault()

    try {
      createComment({
        variables: { body: input.value, postID: postID }
      })

      const { message, code, success } = data.createComment

      if (code === '200') {
        refetch()
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  if (error) {
    console.log(error)
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <InputCommentBox
            ref={node => {
              input = node
            }}
            as="textarea"
            style={{ background: 'white' }}
            role="textbox"
            spellCheck="true"
            placeholder="What are your thoughts"
            height="300"
            width="300"
          ></InputCommentBox>

          <InputCommentFooter>
            <SubmitCommentButton type="submit">Submit</SubmitCommentButton>
          </InputCommentFooter>
        </form>
      </Container>
    </>
  )
}

export default CreateCommentForm
