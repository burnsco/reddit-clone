import React from 'react'
import { Link } from '@reach/router'
import { HeaderContainer, Wrapper } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Link to="/">
          <h1>Reddit</h1>
        </Link>
        <Link to="/signup">
          <h4>Signup</h4>
        </Link>
        <Link to="/login">
          <h4>Login</h4>
        </Link>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header
