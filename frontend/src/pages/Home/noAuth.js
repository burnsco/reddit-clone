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
} from './styles'
import Categories from '../../components/Categories'
import { GET_CATEGORIES_QUERY } from '../../components/Categories/query'
import MainSpinner from '../../components/shared/FallBackSpinner'

const HomePage = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY)
  const navigate = useNavigate()

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>Error! Return to previous page.</div>
  }

  const handleSelect = selectedCategory => {
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
            <TopControlSelect name="category" options={options} onChange={handleSelect} />
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
