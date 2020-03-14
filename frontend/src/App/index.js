import React, { useState, useMemo, useEffect } from 'react'
import Header from '../components/Header'
import { Router } from '@reach/router'
import { AppContainer } from './styles'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import LoginPage from '../pages/Login'
import Signup from '../pages/Signup'
import CreatePostPage from '../pages/CreatePost'
import Comments from '../components/Comments'
import { setAccessToken } from '../context/access-token'
import MainSpinner from '../components/shared/FallBackSpinner'
import PostsPageWithData from '../components/PostList/PostsPageWithData'
import PostAndCommentsPage from '../components/Comments'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include'
    }).then(async x => {
      const { accessToken } = await x.json()
      setAccessToken(accessToken)
      setLoading(false)
    })
  }, [])

  if (loading) return <MainSpinner />

  return (
    <AppContainer>
      <Header />
      <Router>
        <Profile path="profile/:userID">
          <PostsPageWithData path="profile/:userID/posts" />
          <Comments path="profile/:userID/comments" />
          <PostsPageWithData path="/" />
        </Profile>
        <CreatePostPage path="submit" />
        <LoginPage path="login" />
        <Signup path="signup" />
        <Home path="/">
          <PostsPageWithData path="r/:category" />
          <PostAndCommentsPage path="r/:category/:postID/comments" />
          <PostsPageWithData path="/" />
        </Home>
      </Router>
    </AppContainer>
  )
}

export default App
