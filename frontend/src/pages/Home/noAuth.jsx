import React from 'react'
import {
  FeedContainer,
  HomeContainer,
  SidebarContainer,
  TopControls,
  TopControlButtons,
  TopControlSelect,
  TopControlSelectContainer,
} from './styles.js'
import Categories from '../../components/Categories'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../CreatePost/query.js'
import { ContainerHeader } from '../../components/Categories/styles.js'
import MainSpinner from '../../components/shared/FallBackSpinner/index.js'
import { useNavigate } from '@reach/router'

const HomePage = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES)
  const navigate = useNavigate()

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>error, please return to where you came</div>
  }

  const handleSelect = selectedCategory => {
    console.log(`Option selected: `, selectedCategory)
    navigate(`/r/${selectedCategory.label}`, { replace: true })
  }

  const options = data.categories.map(option => {
    return { value: option.id, label: option.name }
  })
  return (
    <HomeContainer>
      <FeedContainer>
        <TopControls>
          <TopControlSelectContainer>
            <TopControlSelect
              name="category"
              options={options}
              onChange={handleSelect}
            />
          </TopControlSelectContainer>
          <TopControlButtons to="/submit" disabled>
            Post
          </TopControlButtons>
          <TopControlButtons to="/createCategory" disabled>
            Category
          </TopControlButtons>
        </TopControls>

        {children}
      </FeedContainer>
      <SidebarContainer>
        <Categories />
      </SidebarContainer>
    </HomeContainer>
  )
}
export default HomePage
