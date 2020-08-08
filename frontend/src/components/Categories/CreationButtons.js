import React from 'react'
import { useQuery } from '@apollo/client'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'
import { StyledSpinner } from '../../styles/components/Spinner'
import { useAuth } from '../../context/auth-context'
import PostAndCategoryButtons from './Buttons'

export default function CreationButtons() {
  const { loading, data } = useQuery(CURRENT_USER_QUERY)
  const { user } = useAuth()

  if (loading) return <StyledSpinner />

  if (data && data.currentUser) {
    return (
      <PostAndCategoryButtons
        postLink="submit"
        categoryLink="createCategory"
        chatLink="chat"
      />
    )
  }
  if (user !== null) {
    return (
      <PostAndCategoryButtons
        postLink="submit"
        categoryLink="createCategory"
        chatLink="chat"
      />
    )
  }
  return (
    <PostAndCategoryButtons
      postLink="signup"
      categoryLink="signup"
      chatLink="signup"
    />
  )
}
