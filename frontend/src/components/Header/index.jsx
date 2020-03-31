import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from '@reach/router'
import {
  HeaderContainer,
  HeaderNavWrapper,
  HeaderLogo,
  HeaderLinks,
  UserIcon
} from './styles'
import { CURRENT_USER } from './query'
import MainSpinner from '../shared/FallBackSpinner'
import NoAuthHeader from '../NoAuthHeader'
import { CategoryLink } from '../Categories/styles'
import { FullLogo, HalfLogo } from '../NoAuthHeader/styles'
import { useUser } from '../../context/user-context'

function Header() {
  const user = useUser()

  if (user && user.username) {
    return (
      <HeaderContainer>
        <HeaderNavWrapper>
          <HeaderLogo>
            <Link to="/">
              <FullLogo />
              <HalfLogo />
            </Link>
          </HeaderLogo>

          <HeaderLinks>
            <CategoryLink to="/profile">
              <UserIcon />
              {user ? user.username : null}
            </CategoryLink>

            {/* TODO Create Logout Function with Cookies */}
            {/* <HeaderLink
              onClick={() => LogoutUser()}
              as="button"
              style={{ background: 'white' }}
            >
              <pre>SignOut</pre>
            </HeaderLink> */}
            {/* 
            <HeaderLink
              as="button"
              onClick={e => {
                setColorMode(colorMode === 'light' ? 'dark' : 'light')
              }}
            >
              {colorMode}
            </HeaderLink> */}
          </HeaderLinks>
        </HeaderNavWrapper>
      </HeaderContainer>
    )
  } else {
    return <NoAuthHeader />
  }
}

export default Header
