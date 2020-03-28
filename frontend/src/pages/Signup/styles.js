import { Link } from '@reach/router'
import styled from '@xstyled/styled-components'
import { CustomButton } from '../../components/shared/CustomButton'

export const WelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`

export const WarningMessage = styled.small`
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  color: red;
  font-weight: 600;
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
  width: 380px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`
