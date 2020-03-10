import React, { useState, useContext } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { useMutation, gql } from '@apollo/client'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { navigate } from '@reach/router'
import { setAccessToken } from '../../context/access-token'
import { UserContext } from '../../context/user-context'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checking, setChecking] = useState(false)
  const [result, setResult] = useState('')
  const { user, setUser } = useContext(UserContext)

  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email: email, password: password }
  })

  const handleSubmit = async event => {
    event.preventDefault()

    if (loading) return <div>Loading</div>
    if (error) return <div>error!</div>

    try {
      const result = await loginUser()

      const { message, accessToken, user, code } = result.data.loginUser
      const { email, id, username } = user
      setUser(username)
      setResult(message)

      if (code === '200') {
        setAccessToken(accessToken)
        navigate('/r/all')
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
