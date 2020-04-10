import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import Spinner from '../../components/shared/FallBackSpinner'
import {
  ProfileContainer,
  ProfileNavigationHeader,
  ProfileNavigationLinks,
  ProfileNavigationLink,
  ProfileSortingItems,
  ProfileFeedContainer,
} from './styles'
import Post from '../../components/Post'
import ProfileCommentsList from './Comments/ProfileCommentsList'
import { CURRENT_USER } from '../../components/Header/query'
import MainSpinner from '../../components/shared/FallBackSpinner'

function ProfilePage({ children }) {
  const { data, loading, error } = useQuery(CURRENT_USER)

  if (loading) return <MainSpinner />
  if (error) {
    console.log(error)
  }

  let username = data.currentUser.username
  let userID = data.currentUser.id

  return (
    <ProfileContainer>
      <ProfileNavigationHeader>
        <h1 style={{ marginTop: 50 + 'rpx' }}>{username}</h1>
      </ProfileNavigationHeader>

      <ProfileNavigationLinks>
        {/* TODO Navigation Header */}
        <ProfileNavigationLink to={`/profile/${userID}/posts`}>
          POSTS
        </ProfileNavigationLink>
        <ProfileNavigationLink to={`/profile/${userID}/comments`}>
          COMMENTS
        </ProfileNavigationLink>
        <ProfileNavigationLink to={`/profile/${userID}/votes`}>
          VOTES
        </ProfileNavigationLink>
      </ProfileNavigationLinks>
      <ProfileFeedContainer>{children}</ProfileFeedContainer>
    </ProfileContainer>
  )
}

export default ProfilePage
