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
import { GET_CATEGORIES } from '../CreatePost/query.js'
import MainSpinner from '../../components/shared/FallBackSpinner/index.js'

const HomePage = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES)
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
          <TopControlButtonPost
            to="/submit"
            disabled
            onClick={() => navigate('signup', { replace: true })}
          >
            Post
          </TopControlButtonPost>
          <TopControlButtonCategory
            to="/createCategory"
            disabled
            onClick={() => navigate('signup', { replace: true })}
          >
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
