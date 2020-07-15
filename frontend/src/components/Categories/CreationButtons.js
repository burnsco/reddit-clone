import React from 'react'
import { useQuery } from '@apollo/client'
import { ContainerHeader } from './styles'
import { CURRENT_USER } from '../Header/query'
import MainSpinner from '../shared/FallBackSpinner'

const CreationButtons = () => {
  const { loading, data } = useQuery(CURRENT_USER)

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
