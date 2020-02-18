import React from 'react'
import { FeedContainer, HomeContainer, SidebarContainer } from './styles.js'
import PostList from '../PostList'
import Categories from '../Categories'
import CreatePostInput from '../CreatePost/input/index.js'
import CreatePostPage from '../CreatePost/page/index.js'

const Home = () => {
  let showPostList = true
  return (
    <HomeContainer>
      <FeedContainer>
        <CreatePostInput />
        {showPostList ? <PostList /> : <CreatePostPage />}
      </FeedContainer>

      <SidebarContainer>
        <Categories />
      </SidebarContainer>
    </HomeContainer>
  )
}

export default Home
