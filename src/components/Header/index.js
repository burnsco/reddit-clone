import React from 'react'
import { Link } from '@reach/router'
import {
  HeaderContainer,
  HeaderNavWrapper,
  HeaderLogo,
  HeaderLinks,
  HeaderLink
} from './styles'
import Logo from '../../assets/logoWithTitle.png'

const Header = () => (
  <HeaderContainer>
    <HeaderNavWrapper>
      <HeaderLogo>
        <Link to="/" style={{ display: 'flex' }}>
          <img src={Logo} height="100" width="130" alt="logo" />
        </Link>
      </HeaderLogo>

      <HeaderLinks>
        <HeaderLink>
          <Link to="/login" style={{ color: '#33a0ff' }}>
            <h5>Login</h5>
          </Link>
        </HeaderLink>

        <HeaderLink style={{ background: '#33a0ff' }}>
          <Link to="/signup" style={{ color: 'white' }}>
            <h5>Signup</h5>
          </Link>
        </HeaderLink>

        <HeaderLink>
          <Link to="/profile">
            <h5>Profile</h5>
          </Link>
        </HeaderLink>
      </HeaderLinks>
    </HeaderNavWrapper>
  </HeaderContainer>
)

export default Header
