import React from 'react'

import { GroupContainer, FormInputContainer, FormInputLabel } from './styles.js'

const FormInput = ({ handleChange, label, ...props }) => {
  const { value } = props
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  )
}
export default FormInput
