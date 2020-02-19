import React from 'react'
import { FeedContainer, HomeContainer, SidebarContainer } from './styles.js'
import Categories from '../../components/Categories'
import PropTypes from 'prop-types'

const Home = ({ children }) => (
  <HomeContainer>
    <FeedContainer>{children}</FeedContainer>
    <SidebarContainer>
      <Categories />
    </SidebarContainer>
  </HomeContainer>
)

Home.propTypes = {
  children: PropTypes.element.isRequired
}

export default Home
