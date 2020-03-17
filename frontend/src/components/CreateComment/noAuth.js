import React from 'react'
import styled from '@xstyled/styled-components'
import { Link } from '@reach/router'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const NoAuth = () => (
  <Container>
    <Link to="/login" style={{ color: '#33a0ff' }}>
      <h5>Login</h5>
    </Link>

    <Link to="/signup" style={{ color: 'white', background: '#33a0ff' }}>
      <h5>Signup</h5>
    </Link>
  </Container>
)

export default NoAuth
