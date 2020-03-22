import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from '@reach/router'
import {
  HeaderContainer,
  HeaderNavWrapper,
  HeaderLogo,
  HeaderLinks,
  HeaderLink,
  UserIcon
} from './styles'
import Logo from '../../assets/logoWithTitle.png'
import { SmallLogo as ReactComponent } from '../../assets/reddit-icon.svg'
import { CURRENT_USER } from './query'
import MainSpinner from '../shared/FallBackSpinner'
import NoAuthHeader from '../NoAuthHeader'
import { CategoryLink } from '../Categories/styles'

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
            <CategoryLink to="/profile">
              <UserIcon />
              {data ? data.currentUser.username : 'no user'}
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
  }
  return <NoAuthHeader />
}

export default Header
