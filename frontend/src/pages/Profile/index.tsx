/* eslint-disable react/destructuring-assignment */
import React from 'react'
import {
  ProfileContainer,
  ProfileNavigationHeader,
  ProfileFeedContainer,
} from './styles'
import ProfileNavigation from './Navigation'
import { RouteComponentProps} from '@types/reach__router'

interface ProfilePageProps extends RouteComponentProps {
  userID?: string,
  children: React.ReactNode | JSX.Element
}

const ProfilePage: React.FC<ProfilePageProps> = ({ children, userID }) => {

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

export default ProfilePage
