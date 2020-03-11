import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
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
import MainSpinner from '../shared/FallBackSpinner'
import { LOGOUT_USER } from '../CreateComment/query'
import { useUser } from '../../context/user-context'

const Header = () => {
  const user = useUser()
  const [logoutUser] = useMutation(LOGOUT_USER)
  const [colorMode, setColorMode] = useColorMode()

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
              <pre>{user.username}</pre>
            </Link>
          </HeaderLink>

          <HeaderLink
            as="button"
            onClick={async () => {
              await logoutUser()
            }}
          >
            <pre>Logout</pre>
          </HeaderLink>

          <HeaderLink
            as="button"
            onClick={e => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }}
          >
            {colorMode}
          </HeaderLink>
        </HeaderLinks>
      </HeaderNavWrapper>
    </HeaderContainer>
  )
}

export default Header
