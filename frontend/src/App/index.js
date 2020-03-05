import React from 'react'
import Header from '../components/Header'
import { AuthContext } from '../context/auth'
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

function UnauthenticatedApp() {
  // Version without profile, shows sign up and login
  // cant post, comment, etc
}

function AuthenticatedApp() {
  // version with the profile, can sign out, post, comment
}

const App = () => (
  <AppContainer>
    <Header />
    <AuthContext.Provider value={false}>
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
    </AuthContext.Provider>
  </AppContainer>
)

export default App
