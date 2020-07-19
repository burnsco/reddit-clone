import React from 'react'
import { useQuery } from '@apollo/client'
import { ContainerHeader } from './styles'
import MainSpinner from '../shared/FallBackSpinner'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'

const CreationButtons = () => {
  const { loading, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <MainSpinner />

  if (data && data.currentUser) {
    return (
      <>
        <ContainerHeader to="/submit">Post</ContainerHeader>
        <ContainerHeader to="/createCategory">Category</ContainerHeader>
      </>
    )
  }
  return null
}

export default CreationButtons
