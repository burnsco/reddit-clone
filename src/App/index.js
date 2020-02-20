import React from 'react'
import Header from '../components/Header'
import { Router } from '@reach/router'
import { AppContainer } from './styles'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import CategoryPosts from '../components/PostList/CategoryPosts'
import AllPosts from '../components/PostList/AllPosts'
import CreatePostPage from '../pages/CreatePost'

const App = () => (
  <AppContainer>
    <Header />
    <Router>
      <Profile path="profile/:username" />
      <Profile path="profile" />
      <CreatePostPage path="submit" />
      <Login path="login" />
      <Signup path="signup" />
      <Home path="/">
        <CategoryPosts path="r/:category" />
        <AllPosts path="/" />
      </Home>
    </Router>
  </AppContainer>
)

export default App
