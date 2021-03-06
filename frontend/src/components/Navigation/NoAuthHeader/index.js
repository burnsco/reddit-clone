import React from 'react'
import { Link } from '@reach/router'
import {
  HeaderContainer,
  HeaderNavWrapper,
  HeaderLogo,
  HeaderLinks,
  HeaderLink,
  FullLogo,
  HalfLogo,
} from './styles'

export default function NoAuthHeader() {
  return (
    <HeaderContainer>
      <HeaderNavWrapper>
        <HeaderLogo>
          <Link to="/r/all" style={{ display: 'flex' }}>
            <HalfLogo alt="logo" />
            <FullLogo alt="logo" />
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
        </HeaderLinks>
      </HeaderNavWrapper>
    </HeaderContainer>
  )
}
