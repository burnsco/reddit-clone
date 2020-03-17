import styled from '@xstyled/styled-components'
import { Link } from '@reach/router'

export const CommentsContainer = styled.div`
  border-radius: 5rpx;
  border: 1px solid grey;
  padding: 10rpx;
  margin-top: 10rpx;
`

export const PostCommentHeader = styled(Link)``

export const PostCommentBody = styled.div`
  margin-top: 10rpx;
`

export const PostContainer = styled.div`
  margin-top: 20rpx;
  border: 1px solid #ebedf0;
  background: #ffffff;
  border-radius: 5rpx;
  display: flex;
  min-height: 100rpx;
  width: 100%;
  &:hover {
    border: 1px solid #6b6969;
  }
`
export const VoteBoxContainer = styled.div``
export const PostDetailsContainer = styled.div`
  min-height: 100rpx;
  width: 100%;
  padding: 10rpx;
  display: flex;

  flex-direction: column;
`
export const PostTitle = styled.div`
  font-weight: 500;
`
export const PostText = styled.div``
export const PostFooter = styled.div`
  display: flex;
  width: 100%;
`
export const PostComments = styled.div``
export const PostCategory = styled.div`
  margin-left: 15rpx;
`
export const PostAuthor = styled.div`
  margin-left: 15rpx;
`
export const PostDateCreated = styled.div`
  margin-left: 15rpx;
`
