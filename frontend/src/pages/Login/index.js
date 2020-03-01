import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
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
        <CustomButton isGoogleSignIn>Sign in with Google</CustomButton>
      </SignInContainer>
    </WelcomePage>
  )
}

export default SignIn
