import React from 'react'

import { ChatBoxInputContainer, ChatInputBox } from './styles'

function CreateChatMessageForm({ chatID }) {
  console.log(chatID)
  let input

  const handleSubmit = (e) => {
    if (e.charCode === 13) {
      console.log('submitted')
      console.log(input.value)
    }
  }

  return (
    <ChatBoxInputContainer>
      <ChatInputBox
        ref={(node) => {
          input = node
        }}
        onKeyUp={(e) => handleSubmit(e)}
        style={{ background: 'white' }}
        spellCheck="true"
      />
    </ChatBoxInputContainer>
  )
}

export default CreateChatMessageForm
