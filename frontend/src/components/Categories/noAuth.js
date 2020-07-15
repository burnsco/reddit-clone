import React from 'react'
import { useQuery } from '@apollo/client'
import { CategoriesContainer, CategoryLink, CategoryLinksContainer } from './styles'
import { GET_CATEGORIES_QUERY } from './query'
import MainSpinner from '../shared/FallBackSpinner'

function Categories() {
  const { loading, data } = useQuery(GET_CATEGORIES_QUERY)

  if (loading) return <MainSpinner />

  return (
    <CategoriesContainer>
      <CategoryLinksContainer>
        <CategoryLink to="/">r/all</CategoryLink>
        {data.categories.map(category => (
          <CategoryLink to={`/r/${category.name}`} key={category.id}>
            r/{category.name}
          </CategoryLink>
        ))}
      </CategoryLinksContainer>
    </CategoriesContainer>
  )
}

export default Categories
