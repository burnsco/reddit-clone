import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import Spinner from '../../components/shared/FallBackSpinner'
import {
  ProfileContainer,
  ProfileNavigationHeader,
  ProfileSorting,
  ProfileSortingItems,
  ProfileFeedContainer
} from './styles'
import Post from '../../components/Post'
import ProfileCommentsList from './Comments'

function ProfilePage({ userID, children }) {
  return (
    <ProfileContainer>
      <ProfileNavigationHeader>
        <h1 style={{ marginTop: 50 + 'rpx' }}>Test</h1>
      </ProfileNavigationHeader>
      <ProfileSorting>
        <h2>test</h2>
        <h3>SORT - (new, etc)</h3>
        <ProfileSortingItems />
      </ProfileSorting>
      <ProfileFeedContainer>
        {/* FIXME Make a router on the profile page */}
      </ProfileFeedContainer>
    </ProfileContainer>
  )
}

export default ProfilePage
