import styled from '@xstyled/styled-components'

export const Container = styled.div`
  width: 45rpx;
  padding: 12rpx;
  height: 100%;
  border-right: 1px solid #ebedf0;
`

export const Upvote = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`

export const Votes = styled.div``

export const Downvote = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`
