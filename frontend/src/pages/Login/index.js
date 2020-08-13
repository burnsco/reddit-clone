/* eslint-disable object-shorthand */
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate } from '@reach/router'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { setAccessToken } from '../../context/access-token'
import { WarningMessage } from '../Signup/styles'
import { LOGIN_MUTATION } from '../../graphql/Mutation/login'
import MainSpinner from '../../components/shared/FallBackSpinner'
import { useUser } from '../../context/user-context'

function LoginPage() {
  const navigate = useNavigate()
  const [result, setResult] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useUser()

  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email: email, password: password },
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const data = await loginUser()

      const { message, code } = data.data.loginUser

      setResult(message)

      if (code === '200') {
        const { user, accessToken } = data.data.loginUser

        setAccessToken(accessToken)

        setUser(user.username)

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

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>Error! contact admin</div>
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
              <CustomButton type="submit" style={{ width: `${100}%` }}>
                {' '}
                Login
              </CustomButton>
            </ButtonsBarContainer>
          </fieldset>
        </form>
      </SignInContainer>
    </WelcomePage>
  )
}

export default LoginPage
