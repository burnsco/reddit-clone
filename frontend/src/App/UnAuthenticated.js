import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import Header from '../components/Header'
import Home from '../pages/Home/noAuth'
import Profile from '../pages/Profile'
import LoginPage from '../pages/Login'
import SignupPage from '../pages/Signup'
import AppContainer from './AppContainer'
import { setAccessToken } from '../context/access-token'
import PostAndCommentsPage from '../pages/ViewPostPage/noAuthIndex'
import AllPostsPageWithData from '../components/PostList/AllPosts/AllPostsPageWithData'
import CommentsPageWithData from '../pages/ViewPostPage/CommentsPage/noAuthCommentsPageWithData'
import CategoryPostsPageWithData from '../components/PostList/CategoryPosts/CategoryPostsPageWithData'
import NotFound from '../pages/404'

function UnAuthenticatedApp() {
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
        <Profile path="profile/:userID">
          <AllPostsPageWithData path="profile/:userID/posts" />
          <CommentsPageWithData path="profile/:userID/comments" />
          <Profile path="/" />
        </Profile>

        <Home path="/">
          <NotFound default />
          <CategoryPostsPageWithData path="r/:category" />
          <PostAndCommentsPage path="r/:category/:postID/comments" />
          <LoginPage path="login" />
          <SignupPage path="signup" />
          <AllPostsPageWithData path="/" />
        </Home>
      </Router>
    </AppContainer>
  )
}

export default UnAuthenticatedApp
