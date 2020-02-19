import React from 'react'

import { GroupContainer, FormInput, FormInputLabel } from './styles.js'

const CustomInput = ({ label, ...props }) => (
  <GroupContainer>
    <FormInput {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
)

export default CustomInput
