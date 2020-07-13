import React from 'react'
import { FeedContainer, HomeContainer, SidebarContainer } from './styles.js'
import Categories from '../../components/Categories'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../CreatePost/query.js'
import MainSpinner from '../../components/shared/FallBackSpinner/index.js'
import { useNavigate } from '@reach/router'
import CreationButtons from './CreationButtons.js'

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
