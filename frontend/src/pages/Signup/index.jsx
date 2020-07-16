import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { navigate } from '@reach/router'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage, WarningMessage } from './styles'
import MainSpinner from '../../components/shared/FallBackSpinner'
import { SIGN_UP_MUTATION } from './mutation'

function SignUpPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('')
  const [createUser, { loading, error }] = useMutation(SIGN_UP_MUTATION, {
    variables: { username, password, email },
  })

  if (loading) return <MainSpinner />
  if (error) return <div>error!</div>

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const result = await createUser()

      const { message, success } = result.data.createUser

      setResult(message)

      if (success) {
        alert(message)
        navigate('/login')
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
          <WarningMessage>{result}</WarningMessage>

          <ButtonsBarContainer>
            <CustomButton type="submit" style={{ width: `${100}%` }}>
              {' '}
              Sign Up{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
        <br />
      </SignInContainer>
    </WelcomePage>
  )
}

export default SignUpPage
