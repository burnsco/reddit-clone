import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Router } from '@reach/router'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import LoginPage from '../pages/Login'
import SignupPage from '../pages/Signup'
import CreatePostPage from '../pages/CreatePost'
import { AppContainer, RoutesContainer } from './styles'
import { setAccessToken } from '../context/access-token'
import MainSpinner from '../components/shared/FallBackSpinner'
import PostAndCommentsPage from '../pages/ViewPostPage/index'
import AllPostsPageWithData from '../components/PostList/AllPosts/AllPostsPageWithData'
import ProfilePage from '../pages/Profile/index'
import CommentsPageWithData from '../pages/ViewPostPage/CommentsPage/CommentsPageWithData'
import CategoryPostsPageWithData from '../components/PostList/CategoryPosts/CategoryPostsPageWithData'
import CreateCategoryPage from '../pages/CreateCategory'
import TestPage from '../components/TestPage'
import ChatPage from '../pages/Chat'
import ChatRouter from '../pages/Chat/router'
import ChatRoom from '../pages/Chat/ChatRoomDisplay/ChatRoom'

function App() {
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
      <RoutesContainer>
        <Router>
          <Home path="/">
            <PostAndCommentsPage path="r/:category/:postID/comments" />
            <CategoryPostsPageWithData path="r/:category" />

            <CreatePostPage path="submitPost" />
            <CreateCategoryPage path="submitCategory" />
            <AllPostsPageWithData path="/" />
          </Home>

          <LoginPage path="login" />
          <SignupPage path="signup" />

          <Profile path="profile">
            <AllPostsPageWithData path="profile/:userID/posts" />
            <CommentsPageWithData path="profile/:userID/comments" />
            <ProfilePage path="/" />
          </Profile>

          <ChatPage path="chat">
            <ChatRoom path="chat/:category" />
          </ChatPage>
        </Router>
      </RoutesContainer>
    </AppContainer>
  )
}

export default App
