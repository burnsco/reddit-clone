import styled from '@emotion/styled'
import { css } from '@emotion/core'

const buttonStyles = css`
  font-family: 'Raleway', sans-serif;
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
const invertedOrangeButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #f12711;
    color: white;
    border: none;
  }
`
const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    color: white;
    background-color: #357ae8;
  }
`
const getButtonStyles = ({ isGoogleSignIn, inverted, invertedOrange }) => {
  if (isGoogleSignIn) {
    return googleSignInStyles
  }
  if (invertedOrange) {
    return invertedOrange ? invertedOrangeButtonStyles : buttonStyles
  }
  return inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 140px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;

  /* Switch Inverted & Google Styles */
  ${getButtonStyles}
`
