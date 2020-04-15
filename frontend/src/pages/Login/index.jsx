import React, { useState, useContext } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { useMutation, gql } from '@apollo/client'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { useNavigate } from '@reach/router'
import { setAccessToken } from '../../context/access-token'
import { UserContext } from '../../context/user-context'
import { useAuth, AuthContext } from '../../context/auth-context'
import { WarningMessage } from '../Signup/styles'
import { LOGIN_MUTATION } from './mutation'

function LoginPage() {
  const navigate = useNavigate()
  const [result, setResult] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { data, setData } = useContext(AuthContext)

  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email: email, password: password },
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const result = await loginUser()

      const { message, accessToken, code } = result.data.loginUser
      setResult(message)

      if (code === '200') {
        const { user } = result.data.loginUser
        setData({ user })
        setAccessToken(accessToken)
        alert(message)
        navigate('../', { replace: true })
      }
      return result
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = event => {
    const { value, name } = event.target
    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  if (loading) return <div>Loading</div>

  if (error) {
    console.log(error)
  }

  return (
    <WelcomePage>
      <SignInContainer>
        <h1>Welcome back</h1>
        <span>Login with your email and password</span>

        <form onSubmit={handleSubmit}>
          <fieldset
            disabled={loading}
            aria-busy={loading}
            style={{ borderStyle: 'none' }}
          >
            <FormInput
              name="email"
              type="email"
              handleChange={handleChange}
              value={email}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={password}
              handleChange={handleChange}
              label="password"
              required
            />
            <WarningMessage>{result}</WarningMessage>
            <ButtonsBarContainer>
              <CustomButton type="submit" style={{ width: 100 + '%' }}>
                {' '}
                Sign in with Email
              </CustomButton>
            </ButtonsBarContainer>
          </fieldset>
        </form>
      </SignInContainer>
    </WelcomePage>
  )
}

export default LoginPage
