import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from '@reach/router'
import { useColorMode } from '@xstyled/styled-components'
import {
  HeaderContainer,
  HeaderNavWrapper,
  HeaderLogo,
  HeaderLinks,
  HeaderLink
} from './styles'
import Logo from '../../assets/logoWithTitle.png'
import { CURRENT_USER, LOGOUT_USER } from './query'
import MainSpinner from '../shared/FallBackSpinner'
import NoAuthHeader from '../NoAuthHeader'

const Header = () => {
  const { loading, error, data } = useQuery(CURRENT_USER)

  if (loading) return <MainSpinner />
  if (error) {
    console.log(error)
  }
  if (data && data.currentUser) {
    return (
      <HeaderContainer>
        <HeaderNavWrapper>
          <HeaderLogo>
            <Link to="/">
              <img src={Logo} height="35" width="100" alt="logo" />
            </Link>
          </HeaderLogo>

          <HeaderLinks>
            <HeaderLink>
              <Link to="/submit">
                <h5>Create</h5>
              </Link>
            </HeaderLink>

            <HeaderLink>
              <Link to="/profile">
                <pre>{data ? data.currentUser.username : 'user'}</pre>
              </Link>
            </HeaderLink>
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
  }
  return <NoAuthHeader />
}

export default Header
