import styled from '@xstyled/styled-components'
import { Link } from '@reach/router'

export const PostContainer = styled.div`
  background: #ffffff;
  display: flex;
  margin-bottom: 20rpx;
  border-radius: 5rpx;
  min-height: 100rpx;
  width: 100%;
`
export const VoteBoxContainer = styled.div``
export const PostDetailsContainer = styled.div`
  margin-top: 5rpx;
  min-height: 100rpx;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const PostDetailsHeader = styled.div`
  font-size: 12rpx;
  display: flex;
  color: #ced1db;
`
export const PostCategory = styled.div`
  &:hover {
    text-decoration: underline;
  }
  font-weight: 700;
  color: black;
`

export const PostedBy = styled.div`
  margin-left: 10rpx;
  text-decoration: none;
`
export const UserName = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  color: #85898b;
`

export const PostTitle = styled.h2`
  margin-top: 10rpx;
  font-weight: 500;
`

export const PostText = styled.div`
  margin-top: 15rpx;
`

export const PostFooter = styled.div`
  margin-top: 20rpx;

  display: flex;
  width: 100%;
`

export const PostComments = styled.div`
  padding: 5rpx;
  margin-bottom: 5rpx;
  color: grey;
  &:hover {
    background: #ebedf0;
  }
`

export const CommentHeader = styled.div`
  font-size: 12rpx;
  display: flex;
  color: #ced1db;
`

export const CommentsContainer = styled.div`
  margin-top: 20rpx;
  margin-left: 45rpx;
  margin-right: 45rpx;
`
export const CommentAuthor = styled.div`
  margin-left: 15rpx;
`

export const CommentCreatedAt = styled.span`
  margin-left: 10rpx;
`

export const PostAndCommentsContainer = styled.section`
  width: 100%;
  border-radius: 5rpx;
  border: 1px solid #ffffff;

  background: #ffffff;
`

export const CommentBody = styled.div`
  margin-top: 10rpx;
`
