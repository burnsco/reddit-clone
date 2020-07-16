import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import Header from '../components/Header'
import Home from '../pages/Home'
import CreatePostPage from '../pages/CreatePost'
import { setAccessToken } from '../context/access-token'
import PostAndCommentsPage from '../pages/ViewPostPage/index'
import AllPostsPageWithData from '../components/PostList/AllPosts/AllPostsPageWithData'
import ProfilePage from '../pages/Profile/index'
import CategoryPostsPageWithData from '../components/PostList/CategoryPosts/CategoryPostsPageWithData'
import CreateCategoryPage from '../pages/CreateCategory'
import NotFound from '../pages/404'
import ProfilePosts from '../pages/Profile/Posts'
import ProfileComments from '../pages/Profile/Comments'
import ProfileVotes from '../pages/Profile/Votes'
import AppContainer from './AppContainer'

function AuthenticatedApp() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    }).then(async x => {
      const { accessToken } = await x.json()
      setAccessToken(accessToken)
      setLoading(false)
    })
  }, [])

  if (loading) return <div>...loading</div>

  return (
    <AppContainer>
      <Header />

      <Router>
        <NotFound default />
        <ProfilePage path="profile">
          <ProfilePosts path="/:userID/posts" />
          <ProfileComments path="/:userID/comments" />
          <ProfileVotes path="/:userID/votes" />
        </ProfilePage>

        <Home path="/">
          <NotFound default />
          <CategoryPostsPageWithData path="r/:category" />
          <PostAndCommentsPage path="r/:category/:postID/comments" />

          <CreatePostPage path="submit" />
          <CreateCategoryPage path="createCategory" />

          <AllPostsPageWithData path="/" />
        </Home>
      </Router>
    </AppContainer>
  )
}

export default AuthenticatedApp
