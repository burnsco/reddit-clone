import styled from '@xstyled/styled-components'

export const CommentsContainer = styled.div`
  border: 1px solid grey;
  padding: 10rpx;
  margin-top: 10rpx;
`
export const InputCommentBox = styled.div`
  overflow: hidden;
  padding: 8px 16px;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border: 1px solid #ebedf0;
  background: #ffffff;
  border-radius: 5rpx;
  display: block;
  resize: vertical;
  min-height: 122px;
  display: flex;
  vertical-align: baseline;
  word-break: break-word;
  &:hover {
    border: 1px solid #6b6969;
  }
`

export const InputCommentFooter = styled.div`
  display: flex;
  border: 1px solid #ebedf0;
  background: #ebedf0;
  border-radius: 5rpx;
  width: 100%;
  align-self: flex-end;
`
