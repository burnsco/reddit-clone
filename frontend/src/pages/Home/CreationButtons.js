import React from 'react'
import { useQuery } from '@apollo/client'
import {
  TopControls,
  TopControlSelect,
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

  const newOptions = [...options, { value: '/', label: '/all' }]

  if (data && data.currentUser) {
    return (
      <>
        <TopControls>
          <TopControlSelectContainer>
            <TopControlSelect name="category" options={newOptions} onChange={handleSelect} />
          </TopControlSelectContainer>
          <TopControlButtonPost to="/submit">Post</TopControlButtonPost>
          <TopControlButtonCategory to="/createCategory">Category</TopControlButtonCategory>
        </TopControls>
      </>
    )
  }
  return null
}

export default CreationButtons
