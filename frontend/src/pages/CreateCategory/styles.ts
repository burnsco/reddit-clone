import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/core'

export const WelcomePage = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WarningMessage = styled.small`
  color: red;
`

export const FormsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignInContainer = styled.div`
  min-width: 320px;
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
