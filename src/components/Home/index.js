import React from 'react'
import { HomeContainer } from './styles.js'
import PostList from '../PostList'
import Categories from '../Categories'

const Home = () => {
  return (
    <HomeContainer>
      <PostList />
      <Categories />
    </HomeContainer>
  )
}

export default Home
