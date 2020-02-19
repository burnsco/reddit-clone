import React from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignUpContainer, WelcomePage } from './styles'

class SignUp extends React.Component {
  state = {
    displayName: '',
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
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state

    return (
      <WelcomePage>
        <SignUpContainer>
          <SignUpContainer>I do not have an account</SignUpContainer>

          <span>Sign up with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              label="Display Name"
              type="text"
              name="displayName"
              onChange={this.handleChange}
              value={displayName}
              required
            />
            <FormInput
              label="Email"
              type="email"
              onChange={this.handleChange}
              name="email"
              value={email}
              required
            />
            <FormInput
              label="Password"
              type="password"
              onChange={this.handleChange}
              name="password"
              value={password}
              required
            />
            <FormInput
              label="Confirm Password"
              type="password"
              onChange={this.handleChange}
              name="confirmPassword"
              value={confirmPassword}
              required
            />
            <ButtonsBarContainer>
              <CustomButton type="submit"> SIGN UP </CustomButton>
            </ButtonsBarContainer>
          </form>
        </SignUpContainer>
      </WelcomePage>
    )
  }
}

export default SignUp
