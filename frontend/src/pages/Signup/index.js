import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { gql, useMutation } from '@apollo/client'
import Spinner from '../../components/shared/FallBackSpinner'

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

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('')
  const [createUser, { loading, error }] = useMutation(SUBMIT_DATA_SIGN_UP, {
    variables: { username: username, password: password, email: email }
  })

  const handleSubmit = async event => {
    event.preventDefault()

    if (loading) return <Spinner />
    if (error) return <div>error</div>

    try {
      const result = await createUser()

      const { message, accessToken, username } = result.data.createUser

      setResult(message)

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
    }
    if (name === 'username') {
      setUsername(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  return (
    <WelcomePage>
      <SignInContainer>
        <h1>Register here</h1>
        <span>with your email and password</span>

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

export default SignUpPage
