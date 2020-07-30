import React from 'react'
import Select from 'react-select'
import {
  TopControls,
  TopControlButtonPost,
  TopControlButtonCategory,
  TopControlSelectContainer,
} from './styles'

const CreationButtons = ({ options, handleSelect }) => (
  <>
    <TopControls>
      <TopControlSelectContainer>
        <Select name="category" options={options} onChange={handleSelect} />
      </TopControlSelectContainer>
      <TopControlButtonPost to="/submit">Post</TopControlButtonPost>
      <TopControlButtonCategory to="/createCategory">
        Category
      </TopControlButtonCategory>
    </TopControls>
  </>
)

export default CreationButtons
