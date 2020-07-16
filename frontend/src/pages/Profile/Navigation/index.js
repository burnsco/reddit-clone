import React from 'react'
import { ProfileNavigationLinks, ProfileNavigationLink } from '../styles'

function ProfileNavigation({ userID }) {
  return (
    <ProfileNavigationLinks>
      {/* TODO Navigation Header */}
      <ProfileNavigationLink to={`/profile/${userID}/posts`}>POSTS</ProfileNavigationLink>
      <ProfileNavigationLink to={`/profile/${userID}/comments`}>COMMENTS</ProfileNavigationLink>
      <ProfileNavigationLink to={`/profile/${userID}/votes`}>VOTES</ProfileNavigationLink>
    </ProfileNavigationLinks>
  )
}

export default ProfileNavigation
