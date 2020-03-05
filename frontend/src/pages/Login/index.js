import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { useMutation, gql } from '@apollo/client'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import Spinner from '../../components/shared/FallBackSpinner'

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      success
      message
      code
      token
    }
  }
`

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('')

  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email: email, password: password }
  })

  const handleSubmit = async event => {
    if (loading) return <Spinner />
    if (error) return <div>error!</div>

    try {
      event.preventDefault()
      const user = await loginUser()
      console.log(user.data.loginUser)
      setResult(user.data.loginUser.message)
      return user
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

  return (
    <WelcomePage>
      <SignInContainer>
        <h1>Welcome back</h1>
        <span>Login with your email and password</span>

        <form onSubmit={handleSubmit}>
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
          <ButtonsBarContainer>
            <CustomButton type="submit" style={{ width: 100 + '%' }}>
              {' '}
              Sign in with email{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
        <br />
        <CustomButton isGoogleSignIn>{result}</CustomButton>
      </SignInContainer>
    </WelcomePage>
  )
}

export default LoginPage
