import React from 'react'
import Header from '../components/Header'
import { Router } from '@reach/router'
import { AppContainer } from './styles'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Signup path="/signup" />
      </Router>
    </AppContainer>
  )
}

export default App
