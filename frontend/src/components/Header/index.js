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
import { CURRENT_USER } from './query'
import MainSpinner from '../shared/FallBackSpinner'
import { LOGOUT_USER } from '../CreateComment/query'
import { setAccessToken } from '../../context/access-token'

const Header = () => {
  const { loading, error, data } = useQuery(CURRENT_USER)
  const [logoutUser] = useMutation(LOGOUT_USER)

  const [colorMode, setColorMode] = useColorMode()

  if (loading) return <MainSpinner />
  if (error) return <div>error</div>

  const { username } = data.currentUser

  console.log(data)
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
              <pre>{username}</pre>
            </Link>
          </HeaderLink>

          <HeaderLink
            as="button"
            onClick={async () => {
              await logoutUser()
              setAccessToken('')
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
