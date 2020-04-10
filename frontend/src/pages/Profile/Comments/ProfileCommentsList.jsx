import React from 'react'
import styled from '@xstyled/styled-components'

export const CommentsContainer = styled.div`
  border: 1px solid grey;
  padding: 10rpx;
  margin-top: 10rpx;
`

const ProfileCommentsList = ({ comment }) => {
  return (
    <CommentsContainer>
      <p>{comment.author}</p>
      <p>{comment.body}</p>
    </CommentsContainer>
  )
}

export default ProfileCommentsList
