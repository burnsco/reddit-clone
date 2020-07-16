import styled from '@emotion/styled'

export const Container = styled.div`
  margin-left: 45rpx;
  margin-right: 45rpx;
`

export const InputCommentBox = styled.input`
  margin-top: 10rpx;
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

export const SubmitCommentButton = styled.button`
  border-radius: 5rpx;
  padding: 10rpx;
  display: flex;
  align-items: center;
  margin-bottom: 5rpx;
  justify-content: center;
  background-color: #ffb000;
  color: white;
  border: none;
  height: 30rpx;
  &:hover {
    background-color: #e8c36e;
  }
`
