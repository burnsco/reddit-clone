import React from 'react'
import { keyframes } from '@emotion/core'
import { FaSpinner } from 'react-icons/fa'
import * as colors from '../../../styles/colors'
import styled from '@emotion/styled'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const buttonVariants = {
  primary: {
    background: colors.indigo,
    color: colors.base
  },
  secondary: {
    background: colors.gray,
    color: colors.text
  }
}

export const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1'
  },
  ({ variant = 'primary' }) => buttonVariants[variant]
)

export function Spinner(props) {
  return (
    <FaSpinner
      css={{ animation: `${spin} 3s linear infinite` }}
      aria-label="loading"
      {...props}
    />
  )
}
