import styled from 'styled-components'

export const Container = styled.div``

export const InputCommentBox = styled.input`
  margin-top: 10px;
  overflow: hidden;
  padding: 8px 16px;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border: 1px solid #ebedf0;
  background: #ffffff;
  border-radius: 5px;
  min-width: 315px;
  display: block;
  width: 100%;
  min-height: 100px;
  display: flex;
  vertical-align: baseline;
  word-break: break-word;
  &:hover {
    border: 1px solid #6b6969;
  }
`

export const InputCommentFooter = styled.div`
  display: flex;
  border-radius: 5px;
  width: 100%;
  align-self: flex-end;
`

export const SubmitCommentButton = styled.button`
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  justify-content: center;
  background-color: #ffb000;
  color: white;
  border: none;
  height: 30px;
  &:hover {
    background-color: #e8c36e;
  }
`
