import React from 'react'
import { useQuery } from '@apollo/client'
import { useNavigate } from '@reach/router'
import {
  FeedContainer,
  HomeContainer,
  SidebarContainer,
  TopControls,
  TopControlSelect,
  TopControlSelectContainer,
  TopControlButtonPost,
  TopControlButtonCategory,
} from './styles.js'
import Categories from '../../components/Categories'
import MainSpinner from '../../components/shared/FallBackSpinner/index.js'
import { GET_CATEGORIES_QUERY } from '../../graphql/Query/categories.js'

const HomePage = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY)
  const navigate = useNavigate()

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>error, please return to where you came</div>
  }

  const handleSelect = (selectedCategory) => {
    console.log(`Option selected: `, selectedCategory)
    navigate(`/r/${selectedCategory.label}`, { replace: true })
  }

  const options = data.categories.map((option) => ({
    value: option.id,
    label: option.name,
  }))
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
          {/* FIXME make these redirect to login */}
          <TopControlButtonPost to="/signup">Post</TopControlButtonPost>
          <TopControlButtonCategory to="/signup">
            Category
          </TopControlButtonCategory>
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
