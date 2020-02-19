import React from 'react'
import { useForm } from 'react-hook-form'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
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
          <FormInput
            label="Display Name"
            type="text"
            ref={register({ required: true })}
            name="displayName"
          />
          <FormInput
            label="Email"
            type="email"
            ref={register({ required: true })}
            name="email"
          />
          <FormInput
            label="Password"
            type="password"
            ref={register({ required: true })}
            name="password"
          />
          <FormInput
            label="Confirm Password"
            type="password"
            ref={register({ required: true })}
            name="confirmPassword"
          />
          <ErrorsContainer>
            {errors.exmapleRequired && <span>This field is required</span>}
          </ErrorsContainer>

          <ButtonsBarContainer>
            <CustomButton type="submit"> SIGN UP </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignUpContainer>
    </WelcomePage>
  )
}
