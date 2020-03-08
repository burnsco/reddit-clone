import React from 'react'
import { Router } from '@reach/router'
import { AppContainer } from './styles'
import Header from '../components/NoAuthHeader'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import LoginPage from '../pages/Login'
import Signup from '../pages/Signup'
import CategoryPosts from '../components/PostList/CategoryPosts'
import AllPosts from '../components/PostList/AllPosts'
import Comments from '../components/Comments'

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Router>
        <Profile path="profile/:userID">
          <AllPosts path="profile/:userID/posts" />
          <Comments path="profile/:userID/comments" />
          <AllPosts path="/" />
        </Profile>
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
