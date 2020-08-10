import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import Home from '../pages/Home'
import Header from '../components/Navigation/Header'
import LoginPage from '../pages/Login/index'
import SignupPage from '../pages/Signup/index'
import CreatePostPage from '../pages/CreatePost'
import { setAccessToken } from '../context/access-token'
import MainSpinner from '../components/shared/FallBackSpinner'
import PostAndCommentsPage from '../pages/ViewPostPage/index'
import AllPostsPageWithData from '../components/PostList/AllPosts/AllPostsPageWithData'
import ProfilePage from '../pages/Profile/index'
import CategoryPostsPageWithData from '../components/PostList/CategoryPosts/CategoryPostsPageWithData'
import CreateCategoryPage from '../pages/CreateCategory'
import NotFound from '../pages/404'
import ProfilePosts from '../pages/Profile/Posts'
import ProfileComments from '../pages/Profile/Comments'
import ProfileVotes from '../pages/Profile/Votes'
import Container from '../styles/components/Container'
import ChatPage from '../pages/Chat'
import PrivateRoute from '../components/PrivateRoute'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_REFRESH}`, {
      method: 'POST',
      credentials: 'include',
    }).then(async (x) => {
      const { accessToken } = await x.json()
      setAccessToken(accessToken)
      setLoading(false)
    })
  }, [])

  if (loading) return <MainSpinner />

  return (
    <>
      <Header />
      <Container m={[0, 2, 4]}>
        <Router>
          <NotFound default />
          <ProfilePage path="profile/:userID">
            <ProfilePosts path="posts" />
            <ProfileComments path="comments" />
            <ProfileVotes path="votes" />
          </ProfilePage>

          <Home path="/">
            <NotFound default />
            <CategoryPostsPageWithData path="r/:category" />
            <PostAndCommentsPage path="r/:category/:postID/comments" />
            <PrivateRoute component={ChatPage} path="chat/:chatID" />
            <PrivateRoute component={CreatePostPage} path="submit" />
            <PrivateRoute
              component={CreateCategoryPage}
              path="createCategory"
            />
            <LoginPage path="login" />
            <SignupPage path="signup" />
            <AllPostsPageWithData path="/" />
          </Home>
        </Router>
      </Container>
    </>
  )
}
