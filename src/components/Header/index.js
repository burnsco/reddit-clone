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
          <img src={Logo} height="35" width="100" alt="logo" />
        </Link>
      </HeaderLogo>

      <HeaderLinks>
        <HeaderLink style={{ background: '#f5222d', border: 'none' }}>
          <Link to="/submit" style={{ color: 'white' }}>
            <h5>Create</h5>
          </Link>
        </HeaderLink>
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

        <HeaderLink style={{ border: 1 + 'px solid orange' }}>
          <Link to="/profile" style={{ color: 'black' }}>
            <h5>Profile</h5>
          </Link>
        </HeaderLink>

        <HeaderLink style={{ background: '#333333' }}>
          <Link to="/profile" style={{ color: 'white' }}>
            <h5>Dark Mode</h5>
          </Link>
        </HeaderLink>
      </HeaderLinks>
    </HeaderNavWrapper>
  </HeaderContainer>
)

export default Header
