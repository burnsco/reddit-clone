import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { useMutation, gql } from '@apollo/client'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { useNavigate } from '@reach/router'
import { setAccessToken } from '../../context/access-token'

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
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('')

  const [loginUser, { client, loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email: email, password: password }
  })

  const handleSubmit = async event => {
    event.preventDefault()

    if (loading) return <div>Loading</div>
    if (error) return <div>error!</div>

    try {
      const result = await loginUser()
      console.log(result)
      const { message, accessToken, code } = result.data.loginUser

      setResult(message)

      if (code === '200') {
        setAccessToken(accessToken)
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
      </SignInContainer>
    </WelcomePage>
  )
}

export default LoginPage
