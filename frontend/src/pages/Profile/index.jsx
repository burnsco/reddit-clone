import React from 'react'
import {useQuery} from '@apollo/client'
import {
  ProfileContainer,
  ProfileNavigationHeader,
  ProfileFeedContainer,
} from './styles'
import {CURRENT_USER} from '../../components/Header/query'
import MainSpinner from '../../components/shared/FallBackSpinner'
import ProfileNavigation from './Navigation'

function ProfilePage({children, userID}) {
  const {data, loading, error} = useQuery(CURRENT_USER)

  if (loading) return <MainSpinner />
  if (error) {
    console.log(error)
  }

  let username = data.currentUser.username

  return (
    <ProfileContainer>
      <ProfileNavigationHeader>
        <h1 style={{marginTop: 50 + 'px'}}>{username}</h1>
      </ProfileNavigationHeader>

      <ProfileNavigation userID={userID} />

      <ProfileFeedContainer>{children}</ProfileFeedContainer>
    </ProfileContainer>
  )
}

export default ProfilePage
