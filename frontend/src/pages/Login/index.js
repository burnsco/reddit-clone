import React, { useState, useContext } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { useMutation, gql } from '@apollo/client'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { UserContext } from '../../context/user-context'
import Spinner from 'react-spinkit'

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      success
      message
      code
      accessToken
      username
    }
  }
`

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('')
  const { user, setUser } = useContext(UserContext)

  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email: email, password: password }
  })

  const handleSubmit = async event => {
    if (loading) return <div>Loading</div>
    if (error) return <div>error!</div>

    try {
      event.preventDefault()
      const result = await loginUser()

      const { message, accessToken, username } = result.data.loginUser
      console.log(`token = ${accessToken}`)
      console.log(`username = ${username}`)
      setUser(username)
      // check status code and redirect to main page
      localStorage.setItem('token', accessToken)
      setResult(message)
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
            <ButtonsBarContainer>
              <CustomButton type="submit" style={{ width: 100 + '%' }}>
                {' '}
                Sign in with Email
              </CustomButton>
            </ButtonsBarContainer>
          </fieldset>
        </form>
        <br />
        <CustomButton isGoogleSignIn>{result}</CustomButton>
      </SignInContainer>
    </WelcomePage>
  )
}

export default LoginPage
