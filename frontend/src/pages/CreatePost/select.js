import React from 'react'
import Select from 'react-select'

const SelectComponent = ({ optionsInput }) => {
  const options = optionsInput.map((option) => ({
    value: option.id,
    label: option.name,
  }))

  return (
    <>
      <Select options={options} />
    </>
  )
}

export default SelectComponent
