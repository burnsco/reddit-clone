import styled from '@xstyled/styled-components'
import { Link } from '@reach/router'

export const PostContainer = styled.div`
  border: 1px solid #ebedf0;
  background: #ffffff;
  display: flex;
  margin-bottom: 20rpx;
  border-radius: 5rpx;
  min-height: 100rpx;
  width: 100%;
  &:hover {
    border: 1px solid #ced1db;
  }
`
export const VoteBoxContainer = styled.div`
  margin-right: 5rpx;
`

export const PostDetailsContainer = styled.div`
  margin-top: 5rpx;
  min-height: 100rpx;
  padding-right: 5rpx;
  padding-left: 5rpx;
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

export const PostTitle = styled.h2`
  margin-top: 10rpx;
  font-weight: 500;
`

export const PostText = styled.div`
  margin-top: 15rpx;
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

export const PostFooter = styled.div`
  margin-top: 20rpx;
  display: flex;
  width: 100%;
`

export const PostComments = styled.div`
  border-radius: 5rpx;
  font-size: 14rpx;
  padding: 5rpx;
  margin-bottom: 5rpx;
  color: grey;
  &:hover {
    background: #ebedf0;
  }
`

export const PostCategory = styled.div`
  &:hover {
    text-decoration: underline;
  }
  font-weight: 700;
  color: black;
`

export const PostAuthor = styled.div`
  margin-left: 15rpx;
`

export const PostDateCreated = styled.div`
  margin-left: 15rpx;
`
