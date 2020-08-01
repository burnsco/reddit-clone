/* eslint-disable react/destructuring-assignment */
import React from 'react'
import {
  ProfileContainer,
  ProfileNavigationHeader,
  ProfileFeedContainer,
} from './styles'
import ProfileNavigation from './Navigation'

function ProfilePage(props) {
  const { userID } = props
  return (
    <ProfileContainer>
      <ProfileNavigationHeader>
        <h1 style={{ marginTop: `${50}px` }}>( USERNAME ) </h1>
      </ProfileNavigationHeader>

      <ProfileNavigation userID={userID} />

      <ProfileFeedContainer>{props.children}</ProfileFeedContainer>
    </ProfileContainer>
  )
}

export default ProfilePage
