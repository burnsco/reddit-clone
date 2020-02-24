import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Spinner from '../../components/shared/FallBackSpinner'
import {
  ProfileContainer,
  ProfileNavigationHeader,
  ProfileSorting,
  ProfileSortingItems,
  ProfileFeedContainer
} from './styles'
import { GET_USER_PROFILE_DATA } from './query'

function Profile({ userID }) {
  const { loading, error, data } = useQuery(GET_USER_PROFILE_DATA, {
    variables: { userID: userID }
  })

  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  console.log(userID)
  console.log(data)

  const { user } = data
  return (
    <ProfileContainer>
      <ProfileNavigationHeader>
        <h1>POSTS</h1>
        <h1>COMMENTS</h1>
      </ProfileNavigationHeader>
      <ProfileSorting>
        <h3>SORT - (new, etc)</h3>
        <ProfileSortingItems />
      </ProfileSorting>
      <ProfileFeedContainer>
        <h3>Posts, Comments, Overview to go beneath here as a child</h3>
      </ProfileFeedContainer>
    </ProfileContainer>
  )
}

export default Profile
