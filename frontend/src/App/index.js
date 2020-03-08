import React, { useState, useMemo, useEffect } from 'react'
import Header from '../components/Header'
import { Router } from '@reach/router'
import { AppContainer } from './styles'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import LoginPage from '../pages/Login'
import Signup from '../pages/Signup'
import CategoryPosts from '../components/PostList/CategoryPosts'
import AllPosts from '../components/PostList/AllPosts'
import CreatePostPage from '../pages/CreatePost'
import Comments from '../components/Comments'
import { UserContext } from '../context/user-context'
import { setAccessToken } from '../context/access-token'
import MainSpinner from '../components/shared/FallBackSpinner'

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [loading, setLoading] = useState(true)
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])

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
          <AllPosts path="profile/:userID/posts" />
          <Comments path="profile/:userID/comments" />
          <AllPosts path="/" />
        </Profile>
        <CreatePostPage path="submit" />
        <LoginPage path="login" />
        <Signup path="signup" />
        <Home path="/">
          <CategoryPosts path="r/:category" />
          <Comments path="r/:category/:postID/comments" />
          <AllPosts path="/" />
        </Home>
      </Router>
    </AppContainer>
  )
}

export default App
