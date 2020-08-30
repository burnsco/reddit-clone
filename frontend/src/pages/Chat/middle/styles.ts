import { Flex } from '@chakra-ui/core'
import styled from '@emotion/styled'

export const ChatDisplayContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
`

export const UserChats = styled.div`
  height: 92%;
  overflow: auto;
  overscroll-behavior-y: contain;
  padding: 15px;
`
export const ChatBoxInputContainer = styled(Flex)`
  border-width: 3px;
  border-style: solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    rgb(250, 112, 154) 0%,
    rgb(254, 225, 64) 100%
  );
  color: white;
  outline: none;
  margin-top: 10px;
  height: 8%;
  font-size: 16px;
  width: 100%;
`
export const ChatInputBox = styled.input`
  font-size: 17px;
  width: 100%;
  padding: 5px;
  outline: none;
  border: none;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
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
