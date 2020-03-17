import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Router } from '@reach/router'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import LoginPage from '../pages/Login'
import Signup from '../pages/Signup'
import CreatePostPage from '../pages/CreatePost'
import { AppContainer } from './styles'
import { setAccessToken } from '../context/access-token'
import MainSpinner from '../components/shared/FallBackSpinner'
import PostAndCommentsPage from '../pages/ViewPostPage/index'
import AllPostsPageWithData from '../components/PostList/AllPosts/AllPostsPageWithData'
import ProfilePage from '../pages/Profile/index'
import CommentsPageWithData from '../pages/ViewPostPage/CommentsPageWithData'
import CategoryPostsPageWithData from '../components/PostList/CategoryPosts/CategoryPostsPageWithData'

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
    <>
      <Header />
      <AppContainer>
        <Router>
          <Profile path="profile/:userID">
            <AllPostsPageWithData path="profile/:userID/posts" />
            <CommentsPageWithData path="profile/:userID/comments" />
            <ProfilePage path="/" />
          </Profile>
          <CreatePostPage path="submit" />
          <LoginPage path="login" />
          <Signup path="signup" />
          <Home path="/">
            <CategoryPostsPageWithData path="r/:category" />
            <PostAndCommentsPage path="r/:category/:postID/comments" />
            <AllPostsPageWithData path="/" />
          </Home>
        </Router>
      </AppContainer>
    </>
  )
}

export default App
