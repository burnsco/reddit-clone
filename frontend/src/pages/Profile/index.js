/* eslint-disable react/destructuring-assignment */
import React from 'react'
import {
  ProfileContainer,
  ProfileNavigationHeader,
  ProfileFeedContainer,
} from './styles'
import ProfileNavigation from './Navigation'

export default function ProfilePage({ userID, children }) {
  return (
    <ProfileContainer>
      <ProfileNavigationHeader>
        <h1 style={{ marginTop: `${50}px` }}>( USERNAME ) </h1>
      </ProfileNavigationHeader>

      <ProfileNavigation userID={userID} />

      <ProfileFeedContainer>{children}</ProfileFeedContainer>
    </ProfileContainer>
  )
}
