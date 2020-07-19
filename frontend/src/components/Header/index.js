import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from '@reach/router'
import {
  HeaderContainer,
  HeaderNavWrapper,
  HeaderLogo,
  HeaderLinks,
  UserIcon,
} from './styles'
import MainSpinner from '../shared/FallBackSpinner'
import NoAuthHeader from '../NoAuthHeader'
import { CategoryLink } from '../Categories/styles'
import { FullLogo, HalfLogo } from '../NoAuthHeader/styles'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'

export default function Header() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY, {
    fetchPolicy: 'network-only',
  })

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
              <FullLogo />
              <HalfLogo />
            </Link>
          </HeaderLogo>

          <HeaderLinks>
            <CategoryLink to={`/profile/${data.currentUser.id}`}>
              <UserIcon />
              {data ? data.currentUser.username : 'no user'}
            </CategoryLink>

            {/* TODO Create Logout Function with Cookies */}
            {/* TODO Create a Dark Mode Toggle */}
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
