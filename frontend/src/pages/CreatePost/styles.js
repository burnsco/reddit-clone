import { Link } from '@reach/router'
import styled from 'styled-components'
import { CustomButton } from '../../components/shared/CustomButton'
import Box from '../../styles/components/Box'

export const WelcomePage = styled(Box)`
  display: flex;
  margin-top: 2em;
  flex-direction: column;
  align-items: center;
`

export const CustomSignInButtonStyles = styled(CustomButton)
export const CustomSignInButton = styled(Link)`
  ${CustomSignInButtonStyles}
`

export const FormsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignInContainer = styled.div`
  min-width: 315px;
  display: flex;
  flex-direction: column;
`

export const SignInTitle = styled.h2`
  margin: 10px 0;
`

export const CreateAccountLink = styled(Link)`
  color: red;
  font-weight: bold;
  margin-top: 50px;

  &:hover {
    text-decoration: underline;
  }
`

export const ButtonsBarContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`

export const SignUpTitle = styled.h2`
  margin: 10px 0;
  margin-top: '3em';
`
