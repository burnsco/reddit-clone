import React from 'react'
import { InputCommentFooter, InputCommentBox } from './styles'

const CommentsButton = () => (
  <>
    <InputCommentBox
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
  </>
)

export default CommentsButton
