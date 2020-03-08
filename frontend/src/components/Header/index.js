import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { Link } from '@reach/router'
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

  return (
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

          <HeaderLink style={{ background: '#333333' }}>
            <Link to="/profile" style={{ color: 'white' }}>
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
        </HeaderLinks>
      </HeaderNavWrapper>
    </HeaderContainer>
  )
}

export default Header
