import React from 'react'
import { FeedContainer, HomeContainer, SidebarContainer } from './styles.js'
import PostList from '../PostList'
import Categories from '../Categories'
import CreatePost from '../CreatePost/index.js'

const Home = () => {
  return (
    <HomeContainer>
      <FeedContainer>
        <CreatePost />
        <PostList />
      </FeedContainer>

      <SidebarContainer>
        <Categories />
      </SidebarContainer>
    </HomeContainer>
  )
}

export default Home
