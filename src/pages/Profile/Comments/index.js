import React from 'react'
import styled from '@xstyled/styled-components'

export const CommentsContainer = styled.div`
  border: 1px solid grey;
  padding: 10rpx;
  margin-top: 10rpx;
`

const ProfileCommentsList = ({ user }) => {
  return (
    <div>
      {user.comments.map(comment => (
        <CommentsContainer key={comment.id}>
          <p>{comment.author}</p>
          <p>{comment.body}</p>
        </CommentsContainer>
      ))}
    </div>
  )
}

export default ProfileCommentsList
