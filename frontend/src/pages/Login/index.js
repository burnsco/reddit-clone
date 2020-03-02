import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { useMutation, gql } from '@apollo/client'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import Spinner from '../../components/shared/FallBackSpinner'

const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      message
      code
      success
      token
      user {
        id
        username
        email
        __typename
      }
      __typename
    }
  }
`

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER, {
    variables: { email: email, password: password }
  })

  const handleSubmit = async event => {
    event.preventDefault()

    const login = await loginUser()
    return login
  }

  const handleChange = event => {
    const { value, name } = event.target
    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  return (
    <WelcomePage>
      <SignInContainer>
        <h1>Welcome back</h1>
        <span>Login with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit' style={{ width: 100 + '%' }}>
              {' '}
              Sign in with email{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
        <br />
        <CustomButton isGoogleSignIn>Sign in with Google</CustomButton>
      </SignInContainer>
    </WelcomePage>
  )
}

export default Login
