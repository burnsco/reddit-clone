import React from 'react'
import Header from '../components/Header'
import { Router } from '@reach/router'
import { AppContainer } from './styles'
import Home from '../components/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import CreatePost from '../components/CreatePost/page'
import CategoryPosts from '../components/PostList/CategoryPosts'
import AllPosts from '../components/PostList/AllPosts'

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Router>
        <Home path="/">
          <CategoryPosts path="r/:category" />
          <AllPosts path="/" />
          <CreatePost path="submit" />
          <Login path="login" />
          <Signup path="signup" />
        </Home>
      </Router>
    </AppContainer>
  )
}

export default App
