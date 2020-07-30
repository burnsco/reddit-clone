import React from 'react'
import { useQuery } from '@apollo/client'
import {
  ProfileContainer,
  ProfileNavigationHeader,
  ProfileFeedContainer,
} from './styles'
import MainSpinner from '../../components/shared/FallBackSpinner'
import ProfileNavigation from './Navigation'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'

function ProfilePage({ children }) {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <MainSpinner />
  if (error) {
    console.log(error)
  }

  const { username, id } = data.currentUser

  return (
    <ProfileContainer>
      <ProfileNavigationHeader>
        <h1 style={{ marginTop: `${50}px` }}>{username}</h1>
      </ProfileNavigationHeader>

      <ProfileNavigation userID={id} />

      <ProfileFeedContainer>{children}</ProfileFeedContainer>
    </ProfileContainer>
  )
}

export default ProfilePage
