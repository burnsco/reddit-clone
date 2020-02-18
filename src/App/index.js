import React from 'react'
import Header from '../components/Header'
import { Router } from '@reach/router'
import { AppContainer } from './styles'
import Home from '../components/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import CreatePost from '../components/CreatePost/page'

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Router>
        <CreatePost path="/submit" />
        <Login path="/login" />
        <Signup path="/signup" />
        <Home path="/" />
      </Router>
    </AppContainer>
  )
}

export default App
