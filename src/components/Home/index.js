import React from 'react'
import { FeedContainer, HomeContainer, SidebarContainer } from './styles.js'
import Categories from '../Categories'

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
