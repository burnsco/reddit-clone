import styled from 'styled-components'
import Box from '../../../styles/components/Box'

export const ChatDisplayContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`
export const UserChats = styled.div`
  overflow: auto;
  height: 92%;
`
export const ChatBoxInputContainer = styled.div`
  margin-top: 10px;
  display: flex;
  height: 8%;
  font-size: 16px;
  min-width: 100%;
`
export const ChatInputBox = styled.input`
  font-size: 17px;
  width: 100%;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  border: 1px solid black;
`
export const ChatButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export const UserChatBox = styled.div`
  border-bottom: 2px solid #ebedf0;
  padding: 10px;
`
export const UserChatHeader = styled.div`
  display: flex;
`
export const UserChatUserName = styled.div`
  font-weight: 500;
  border: 1px solid black;
  padding: 2px;
`
export const UserChatTimeStamp = styled.div`
  margin-left: 10px;
  font-size: 12px;
`
export const UserChatBody = styled.div`
  margin-top: 5px;
  font-size: 14px;
  padding-bottom: 10px;
`
