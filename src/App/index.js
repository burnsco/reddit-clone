import React from 'react'
import Header from '../components/Header'
import { Router } from '@reach/router'
import { AppContainer } from './styles'
import Home from '../components/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import CreatePost from '../components/CreatePost/page'
import PostList from '../components/PostList'

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Router>
        <Home path="/">
          <PostList path="r/:category" />
          <PostList path="/" />
          <CreatePost path="submit" />
          <Login path="login" />
          <Signup path="signup" />
        </Home>
      </Router>
    </AppContainer>
  )
}

export default App
