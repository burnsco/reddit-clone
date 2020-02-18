import React from 'react'
import { CustomButtonContainer } from './Container'

export const CustomButton = props => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
)
