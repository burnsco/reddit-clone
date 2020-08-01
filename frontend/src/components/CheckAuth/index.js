import React from 'react'
import { useQuery } from '@apollo/client'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'
import { useAuth } from '../../context/auth-context'
import MainSpinner from '../shared/FallBackSpinner'

export default function CheckAuth({
  yesAuth: Authorized,
  noAuth: UnAuthorized,
}) {
  const { loading, data } = useQuery(CURRENT_USER_QUERY)
  const { user } = useAuth()
  if (loading) return <MainSpinner />

  if ((data && data.currentUser) || user !== null) return <Authorized />

  return <UnAuthorized />
}
