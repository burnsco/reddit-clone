import { useQuery } from '@apollo/client'
import React from 'react'
import { useAuth } from '../../context/auth-context'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'
import MainSpinner from '../shared/FallBackSpinner'
import { ContainerHeader } from './styles'

export default function CreationButtons() {
  const { loading, data } = useQuery(CURRENT_USER_QUERY)

  const { user } = useAuth()
  if (loading) return <MainSpinner />

  if ((data && data.currentUser) || user !== null) {
    return (
      <>
        <ContainerHeader to="/submit">Post</ContainerHeader>
        <ContainerHeader to="/createCategory">Category</ContainerHeader>
      </>
    )
  }

  return (
    <>
      <ContainerHeader to="/signup">Post</ContainerHeader>
      <ContainerHeader to="/signup">Category</ContainerHeader>
    </>
  )
}
