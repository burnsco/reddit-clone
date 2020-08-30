import React from 'react'
import { useQuery } from '@apollo/client'
import { useAuth } from '../../context/auth-context'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'
import MainSpinner from '../shared/FallBackSpinner'

const PrivateRoute = ({
  componentOne: ComponentOne,
  componentTwo: ComponentTwo,
  ...props
}) => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)
  const { user } = useAuth()

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
  }

  if (data && data.currentUser) {
    return <ComponentOne {...props} />
  }

  if (user !== null) {
    return <ComponentOne {...props} />
  }

  return <ComponentTwo {...props} />
}

export default PrivateRoute
