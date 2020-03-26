import styled from '@xstyled/styled-components'

export const ChatDisplayContainer = styled.div`
  min-height: 100%;
  flex-grow: 1;
  display: flex;
  overflow: auto;
  flex-direction: column;
`
export const UserChats = styled.div`
  height: 92%;
  padding: 15rpx;
`
export const ChatBoxInputContainer = styled.div`
  display: flex;
  height: 8%;
  font-size: 16rpx;
  min-width: 100%;
`
export const ChatInputBox = styled.input`
  font-size: 17rpx;
  min-width: 100%;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  border-radius: 3px;
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
  padding: 10rpx;
`
export const UserChatHeader = styled.div`
  display: flex;
`
export const UserChatUserName = styled.div`
  font-weight: 500;
  border: 1px solid black;
  padding: 2rpx;
`
export const UserChatTimeStamp = styled.div`
  margin-left: 10rpx;
  font-size: 12rpx;
`
export const UserChatBody = styled.div`
  margin-top: 5rpx;
  font-size: 14rpx;
  padding-bottom: 10rpx;
`
