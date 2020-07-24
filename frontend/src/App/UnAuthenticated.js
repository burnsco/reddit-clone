import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import Header from '../components/Navigation/NoAuthHeader'
import Home from '../pages/Home/noAuth'
import Profile from '../pages/Profile'
import LoginPage from '../pages/Login'
import SignupPage from '../pages/Signup'
import { setAccessToken } from '../context/access-token'
import MainSpinner from '../components/shared/FallBackSpinner'
import PostAndCommentsPage from '../pages/ViewPostPage/noAuthIndex'
import AllPostsPageWithData from '../components/PostList/AllPosts/AllPostsPageWithData'
import CommentsPageWithData from '../pages/ViewPostPage/CommentsPage/noAuthCommentsPageWithData'
import CategoryPostsPageWithData from '../components/PostList/CategoryPosts/CategoryPostsPageWithData'
import NotFound from '../pages/404'
import Container from '../styles/components/Container'

export default function UnAuthenticatedApp() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    }).then(async (x) => {
      const { accessToken } = await x.json()
      setAccessToken(accessToken)
      setLoading(false)
    })
  }, [])

  if (loading) return <MainSpinner />

  return (
    <>
      <Header />
      <Container m={[0, 2, 4]}>
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
      </Container>
    </>
  )
}
