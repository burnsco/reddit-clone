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
import { GET_USER_PROFILE_DATA } from './query'
import Post from '../../components/Post'
import ProfileCommentsList from './Comments'

function Profile({ userID, children }) {
  const { loading, error, data } = useQuery(GET_USER_PROFILE_DATA, {
    variables: { userID: userID }
  })
  const [showPosts, setShowPosts] = useState(true)

  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  console.log(userID)
  console.log(data)

  // make it a route and match it to switch between posts and comments?
  // or some sort of switch on the page?

  function showPostsOrComments() {
    if (showPosts) {
      return user.posts.map(post => <Post key={post.id} post={post} />)
    } else {
      return user.comments.map(comment => (
        <ProfileCommentsList key={comment.id} comment={comment} />
      ))
    }
  }

  // FIXME refactor this page at some point, posts, comments, functions, etc
  const { user } = data

  return (
    <ProfileContainer>
      <ProfileNavigationHeader>
        <h1 onClick={() => setShowPosts(true)}>POSTS</h1>
        <h1 onClick={() => setShowPosts(false)}>COMMENTS</h1>
      </ProfileNavigationHeader>
      <ProfileSorting>
        <h3>SORT - (new, etc)</h3>
        <ProfileSortingItems />
      </ProfileSorting>
      <ProfileFeedContainer>
        {/* FIXME Make a router on the profile page */}
      </ProfileFeedContainer>

      {showPostsOrComments()}
    </ProfileContainer>
  )
}

export default Profile
