import React from 'react'

import { GroupContainer, FormInput, FormInputLabel } from './styles.js'

const CustomInput = ({ label, ...props }) => {
  const { value } = props

  return (
    <GroupContainer>
      <FormInput {...props} />
      {label ? (
        <FormInputLabel className={value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  )
}
export default CustomInput
