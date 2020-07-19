import React from 'react'
import { useQuery } from '@apollo/client'
import Select from 'react-select'
import {
  TopControls,
  TopControlButtonPost,
  TopControlButtonCategory,
  TopControlSelectContainer,
} from './styles'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'
import MainSpinner from '../../components/shared/FallBackSpinner'

const CreationButtons = ({ options, handleSelect }) => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
  }

  if (data && data.currentUser) {
    return (
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
  }
  return null
}

export default CreationButtons
