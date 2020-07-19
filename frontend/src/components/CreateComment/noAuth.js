import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Container = styled.div`
  margin-left: 45px;
  display: flex;
  border: 1px solid #ebedf0;
`
const CommentLinks = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  padding: 10px;
  margin: 5px;
  border: 1px solid #33a0ff;
  border-radius: 5px;
  &:hover {
    box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.37);
  }
`

const NoAuth = () => (
  <Container>
    <CommentLinks style={{ background: '#33a0ff' }}>
      <Link to="/signup" style={{ color: 'white', background: '#33a0ff' }}>
        <h5>Signup</h5>
      </Link>
    </CommentLinks>
    <CommentLinks>
      <Link to="/login" style={{ color: '#33a0ff' }}>
        <h5>Login</h5>
      </Link>
    </CommentLinks>
    <p style={{ alignSelf: 'center' }}>Login to comment</p>
  </Container>
)

export default NoAuth
