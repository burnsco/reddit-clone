import React from 'react'
import { FeedContainer, HomeContainer, SidebarContainer } from './styles.js'
import { Router } from '@reach/router'
import PostList from '../PostList'
import Categories from '../Categories'
import CreatePostInput from '../CreatePost/input/index.js'

// PostList (all) get all posts
// PostList via (category) get only the categories you want

const Home = ({ children }) => {
  return (
    <HomeContainer>
      <FeedContainer>{children}</FeedContainer>

      <SidebarContainer>
        <Categories />
      </SidebarContainer>
    </HomeContainer>
  )
}

export default Home
