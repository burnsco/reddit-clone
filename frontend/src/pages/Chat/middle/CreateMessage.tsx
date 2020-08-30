import React from 'react'
import { useMutation } from '@apollo/client'
import { ChatBoxInputContainer, ChatInputBox, ChatButton } from './styles'
import { SUBMIT_CHAT_MESSAGE } from '../../../graphql/Mutation/submit_chat_message'

function CreateChatMessageForm({ chatID }) {
  const [createChatMessage, { loading, error }] = useMutation(
    SUBMIT_CHAT_MESSAGE
  )

  let input

  if (loading) return null

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const result = await createChatMessage({
        variables: { text: input.value, chatID },
      })

      return result
    } catch (ex) {
      console.log(ex)
    }
  }

  if (error) {
    console.log(error)
  }

  return (
    <ChatBoxInputContainer>
      <form onSubmit={handleSubmit}>
        <ChatInputBox
          ref={node => {
            input = node
          }}
          style={{ background: 'white' }}
          spellCheck="true"
        />
        <ChatButton type="submit">Submit</ChatButton>
      </form>
    </ChatBoxInputContainer>
  )
}

export default CreateChatMessageForm
