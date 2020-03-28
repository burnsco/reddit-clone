import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { useMutation, gql } from '@apollo/client'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { useNavigate } from '@reach/router'
import { setAccessToken } from '../../context/access-token'
import { WarningMessage } from '../Signup/styles'

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      success
      message
      code
      accessToken
      user {
        id
        email
        username
      }
    }
  }
`

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')

  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email: email, password: password }
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const result = await loginUser()

      const { message, accessToken, success } = result.data.loginUser

      setMessage(message)
      if (success) {
        setAccessToken(accessToken)
        alert(message)
        navigate('../', { replace: true })
      }
      return result
    } catch (error) {
      console.log(error)
    }
    setEmail('')
    setPassword('')
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
  if (error) return <div>error!</div>

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
            <WarningMessage>{message}</WarningMessage>
            <CustomButton type="submit" style={{ width: 100 + '%' }}>
              {' '}
              Sign in with Email
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    </WelcomePage>
  )
}

export default LoginPage
