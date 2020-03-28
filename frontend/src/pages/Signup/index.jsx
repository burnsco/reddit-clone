import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import {
  ButtonsBarContainer,
  SignInContainer,
  WelcomePage,
  WarningMessage
} from './styles'
import { gql, useMutation } from '@apollo/client'
import MainSpinner from '../../components/shared/FallBackSpinner'
import { navigate } from '@reach/router'

const SUBMIT_DATA_SIGN_UP = gql`
  mutation SubmitDataAndSignUp(
    $username: String!
    $password: String!
    $email: String!
  ) {
    createUser(
      data: { email: $email, username: $username, password: $password }
    ) {
      message
      code
      success
      accessToken
      user {
        id
        email
        username
      }
    }
  }
`

function SignUpPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [createUser, { loading, error }] = useMutation(SUBMIT_DATA_SIGN_UP, {
    variables: { username: username, password: password, email: email }
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const result = await createUser()

      const { message, success } = result.data.createUser

      setMessage(message)
      if (success) {
        navigate('/login')
      }
      return result
    } catch (error) {
      console.log(error)
    }

    setEmail('')
    setPassword('')
    setUsername('')
  }

  const handleChange = event => {
    const { value, name } = event.target

    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'username') {
      setUsername(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  if (loading) return <MainSpinner />
  if (error) return <div>error</div>

  return (
    <WelcomePage>
      <SignInContainer>
        <h1>Register here</h1>
        <span>with your email and desired username</span>

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
            name="username"
            type="text"
            handleChange={handleChange}
            value={username}
            label="username"
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
              Sign in with email{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    </WelcomePage>
  )
}

export default SignUpPage
