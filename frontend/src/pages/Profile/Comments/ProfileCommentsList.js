import React from 'react'
import styled from 'styled-components'

export const CommentsContainer = styled.div`
  border: 1px solid grey;
  padding: 10px;
  margin-top: 10px;
`

const ProfileCommentsList = ({ comment }) => (
  <CommentsContainer>
    <p>{comment.author}</p>
    <p>{comment.body}</p>
  </CommentsContainer>
)

export default ProfileCommentsList
