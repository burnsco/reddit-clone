import React, { useState, useMemo } from 'react'
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

const App = () => {
  const [user, setUser] = useState(null)
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <AppContainer>
      <UserContext.Provider value={providerValue}>
        <Header />
        <Router>
          <Profile path='profile/:userID'>
            <AllPosts path='profile/:userID/posts' />
            <Comments path='profile/:userID/comments' />
            <AllPosts path='/' />
          </Profile>
          <CreatePostPage path='submit' />
          <LoginPage path='login' />
          <Signup path='signup' />
          <Home path='/'>
            <CategoryPosts path='r/:category' />
            <Comments path='r/:category/:postID/comments' />
            <AllPosts path='/' />
          </Home>
        </Router>
      </UserContext.Provider>
    </AppContainer>
  )
}

export default App
