import styled from '@xstyled/styled-components'

export const InputCommentBox = styled.input`
  overflow: hidden;
  padding: 8px 16px;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border: 1px solid #ebedf0;
  background: #ffffff;
  border-radius: 5rpx;
  min-width: 500rpx;
  display: block;
  width: 100%;
  min-height: 100rpx;
  display: flex;
  vertical-align: baseline;
  word-break: break-word;
  &:hover {
    border: 1px solid #6b6969;
  }
`

export const InputCommentFooter = styled.div`
  display: flex;
  border-radius: 5rpx;
  width: 100%;
  align-self: flex-end;
`

export const InputCommentButton = styled.div`
  background: '#33a0ff';
  color: 'white';
  padding: 10rpx;
  margin: 5rpx;
  border: 1px solid #33a0ff;
  border-radius: 5rpx;
  &:hover {
    -webkit-box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.37);
    box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.37);
  }
`
