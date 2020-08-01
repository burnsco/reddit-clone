import React from 'react'
import Select from 'react-select'
import { Create } from '@styled-icons/ionicons-outline'
import { CreateNewFolder } from '@styled-icons/material-outlined'
import {
  TopControls,
  TopControlButtonPost,
  TopControlButtonCategory,
  TopControlSelectContainer,
} from './styles'
import Box from '../../styles/components/Box'

const CreationButtons = ({ options, handleSelect }) => (
  <>
    <TopControls>
      <TopControlSelectContainer>
        <Select name="category" options={options} onChange={handleSelect} />
      </TopControlSelectContainer>
      <TopControlButtonPost to="/submit">
        <Create size="1.3em" color="#f49342" />
        <Box ml="2">Post</Box>
      </TopControlButtonPost>
      <TopControlButtonCategory to="/createCategory">
        <CreateNewFolder size="1.3em" color="#f49342" />
        <Box ml="2">Subreddit</Box>
      </TopControlButtonCategory>
    </TopControls>
  </>
)

export default CreationButtons
