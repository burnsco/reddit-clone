import React from 'react'
import { Link } from '@reach/router'
import { HeaderContainer, HeaderNav } from './styles'
import Logo from '../../assets/logoWithTitle.png'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <Link to="/" style={{ display: 'flex' }}>
          <img src={Logo} height="100" width="130" alt="logo" />
        </Link>

        <Link to="/signup">
          <h5>Signup</h5>
        </Link>
        <Link to="/login">
          <h5>Login</h5>
        </Link>
      </HeaderNav>
    </HeaderContainer>
  )
}

export default Header
