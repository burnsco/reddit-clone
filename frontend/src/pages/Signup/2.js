import React from 'react'
import { useMutation, gql } from '@apollo/client'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignUpContainer, WelcomePage } from './styles'

const SUBMIT_DATA_SIGN_UP = gql`
  mutation SubmitDataAndSignUp(
    $username: String!
    $password: String!
    $email: String!
  ) {
    createUser(username: $username, password: $password, email: $email) {
      id
      username
      email
      token
    }
  }
`

class SignUp extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = async event => {
    event.preventDefault()

    const { password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert('passwords dont match')
      return
    }

    this.setState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  render() {
    const { username, email, password, confirmPassword } = this.state

    return (
      <WelcomePage>
        <SignUpContainer>
          <h1>Sign Up</h1>
          <span>with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              label='Display Name'
              type='text'
              name='displayName'
              onChange={this.handleChange}
              value={username}
              required
            />
            <FormInput
              label='Email'
              type='email'
              onChange={this.handleChange}
              name='email'
              value={email}
              required
            />
            <FormInput
              label='Password'
              type='password'
              onChange={this.handleChange}
              name='password'
              value={password}
              required
            />
            <FormInput
              label='Confirm Password'
              type='password'
              onChange={this.handleChange}
              name='confirmPassword'
              value={confirmPassword}
              required
            />
            <ButtonsBarContainer>
              <CustomButton type='submit'> SIGN UP </CustomButton>
            </ButtonsBarContainer>
          </form>
        </SignUpContainer>
      </WelcomePage>
    )
  }
}

export default SignUp
