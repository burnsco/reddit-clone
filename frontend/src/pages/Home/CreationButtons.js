import { useQuery } from '@apollo/client'
import React from 'react'
import Select from 'react-select'
import MainSpinner from '../../components/shared/FallBackSpinner'
import { useAuth } from '../../context/auth-context'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'
import {
  TopControls,
  TopControlButtonPost,
  TopControlButtonCategory,
  TopControlSelectContainer,
} from './styles'

const CreationButtons = ({ options, handleSelect }) => {
  const { loading, data } = useQuery(CURRENT_USER_QUERY)

  const { user } = useAuth()
  if (loading) return <MainSpinner />

  if ((data && data.currentUser) || user !== null) {
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
  return (
    <>
      <TopControls>
        <TopControlSelectContainer>
          <Select name="category" options={options} onChange={handleSelect} />
        </TopControlSelectContainer>
        <TopControlButtonPost to="/signup">Post</TopControlButtonPost>
        <TopControlButtonCategory to="/signup">
          Category
        </TopControlButtonCategory>
      </TopControls>
    </>
  )
}

export default CreationButtons
