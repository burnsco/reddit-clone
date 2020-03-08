import React, { useContext } from 'react'
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
import { UserContext } from '../../context/user-context'
import { SignOutUser } from '../../utils/signout'
import { CURRENT_USER } from './query'

const Header = () => {
  const { loading, error, data } = useQuery(CURRENT_USER)
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
            <Link to="/login">
              <h5>Login</h5>
            </Link>
          </HeaderLink>

          <HeaderLink>
            <Link to="/signup">
              <h5>Signup</h5>
            </Link>
          </HeaderLink>

          <HeaderLink>
            <Link to="/profile">
              <pre>{data ? data.currentUser.username : 'user'}</pre>
            </Link>
          </HeaderLink>

          <HeaderLink
            onClick={() => SignOutUser()}
            as="div"
            style={{ background: 'white' }}
          >
            <pre>SignOut</pre>
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
