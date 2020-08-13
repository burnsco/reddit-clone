import React from 'react'
import { useQuery } from '@apollo/client'
import { useNavigate } from '@reach/router'
import PropTypes from 'prop-types'
import { FeedContainer, HomeContainer, SidebarContainer } from './styles'
import Categories from '../../components/Categories'
import MainSpinner from '../../components/shared/FallBackSpinner/index'
import CreationButtons from './CreationButtons'
import { GET_CATEGORIES_QUERY } from '../../graphql/Query/categories'

const HomePage = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY, {
    pollInterval: 500,
  })
  const navigate = useNavigate()

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>error, please return to where you came</div>
  }

  const handleSelect = selectedCategory => {
    if (selectedCategory.label === 'all') {
      navigate('../')
    }
    navigate(`/r/${selectedCategory.label}`, { replace: true })
  }

  const options = data.categories.map(option => ({
    value: option.id,
    label: option.name,
  }))
  const newOptions = [...options, { value: '', label: 'all' }]
  return (
    <HomeContainer>
      <FeedContainer>
        <CreationButtons options={newOptions} handleSelect={handleSelect} />
        {children}
      </FeedContainer>
      <SidebarContainer>
        <Categories />
      </SidebarContainer>
    </HomeContainer>
  )
}

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomePage
