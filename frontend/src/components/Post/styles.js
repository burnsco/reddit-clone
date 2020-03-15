import styled from '@xstyled/styled-components'

export const PostContainer = styled.div`
  margin-top: 20rpx;
  border: 1px solid #ebedf0;
  background: #ffffff;
  display: flex;
  min-height: 100rpx;
  width: 100%;
  &:hover {
    border: 1px solid #6b6969;
  }
`
export const VoteBoxContainer = styled.div`
  border: 1px solid orange;
`

export const PostDetailsContainer = styled.div`
  margin-top: 5rpx;
  border: 1px solid red;
  min-height: 100rpx;
  padding-right: 5rpx;
  padding-left: 5rpx;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const PostDetailsHeader = styled.div`
  border: 1px solid green;
  font-size: 12rpx;
  display: flex;
  color: #85898b;
`

export const PostTitle = styled.h2`
  margin-top: 10rpx;
  font-weight: 500;
  border: 1px solid blue;
`

export const PostText = styled.div`
  margin-top: 15rpx;
  border: 1px solid green;
`

export const PostFooter = styled.div`
  margin-top: 20rpx;
  border: 1px solid purple;
  display: flex;
  width: 100%;
`

export const PostComments = styled.div``

export const PostCategory = styled.div`
  font-weight: 700;
  color: black;
`

export const PostAuthor = styled.div`
  margin-left: 15rpx;
`

export const PostDateCreated = styled.div`
  margin-left: 15rpx;
`
