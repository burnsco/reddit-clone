import React from 'react'
import { ContainerHeader } from './styles'
import { useQuery } from '@apollo/client'
import { CURRENT_USER } from '../Header/query'
import MainSpinner from '../shared/FallBackSpinner'

const CreationButtons = () => {
  const { loading, error, data } = useQuery(CURRENT_USER)

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
  }

  if (data && data.currentUser) {
    return (
      <>
        <ContainerHeader to="/submit">Post</ContainerHeader>
        <ContainerHeader to="/createCategory">Category</ContainerHeader>
      </>
    )
  } else {
    return null
  }
}

export default CreationButtons
