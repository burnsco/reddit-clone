import React from 'react'
import { useQuery } from '@apollo/client'
import { useNavigate } from '@reach/router'
import { FeedContainer, HomeContainer, SidebarContainer } from './styles'
import Categories from '../../components/Categories'
import { GET_CATEGORIES } from '../CreatePost/query'
import MainSpinner from '../../components/shared/FallBackSpinner/index'
import CreationButtons from './CreationButtons'

const HomePage = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES)
  const navigate = useNavigate()

  if (loading) return <MainSpinner />

  if (error) {
    return <div>error, please return to where you came</div>
  }

  const handleSelect = selectedCategory => {
    navigate(`${selectedCategory.label}`)
  }

  const options = data.categories.map(option => {
    return { value: option.id, label: `/r/${option.name}` }
  })

  return (
    <HomeContainer>
      <FeedContainer>
        <CreationButtons options={options} handleSelect={handleSelect} />

        {children}
      </FeedContainer>
      <SidebarContainer>
        <Categories />
      </SidebarContainer>
    </HomeContainer>
  )
}
export default HomePage
