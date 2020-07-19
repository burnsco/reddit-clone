import React from 'react'
import { CustomButtonContainer } from './Container'

export const CustomButton = (props) => {
  const { children } = props
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
}
