import React, { useRef } from 'react'
import { ChatBoxInputContainer, ChatInputBox } from './styles'

const ChatInputBoxComponent = () => {
  const inputRef = useRef(null)
  return (
    <>
      <ChatBoxInputContainer>
        <ChatInputBox
          ref={inputRef}
          placeholder="chat here"
          onMouseEnter={() => {
            inputRef.current.focus()
          }}
        />
      </ChatBoxInputContainer>
    </>
  )
}

export default ChatInputBoxComponent
