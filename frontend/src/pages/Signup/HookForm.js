import React from 'react'
import { useForm } from 'react-hook-form'
import { CustomButton } from '../../components/shared/CustomButton'
import CustomInput from '../../components/shared/CustomInput'
import {
  ButtonsBarContainer,
  SignUpContainer,
  WelcomePage,
  SignInHeading,
  ErrorsContainer
} from './styles'

export default function SignUp() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  console.log(watch(`example`))

  return (
    <WelcomePage>
      <SignUpContainer>
        <SignInHeading>I do not have an account</SignInHeading>
        <SignInHeading>Sign up with your email and password</SignInHeading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            label="Display Name"
            type="text"
            name="username"
            ref={register({
              validate: value => value !== 'admin' || 'Nice try!'
            })}
          />
          {errors.username && errors.username.message}
          />
          <CustomInput
            label="Email"
            type="email"
            name="email"
            ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email address'
              }
            })}
          />
          {errors.email && errors.email.message}
          />
          <CustomInput
            label="Password"
            type="password"
            ref={register({ required: true })}
            name="password"
          />
          <CustomInput
            label="Confirm Password"
            type="password"
            ref={register({ required: true })}
            name="confirmPassword"
          />
          <ErrorsContainer>
            {errors && <span>This field is required</span>}
          </ErrorsContainer>
          <ButtonsBarContainer>
            <CustomButton type="submit"> SIGN UP </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignUpContainer>
    </WelcomePage>
  )
}
