import React from 'react'
import { useQuery } from '@apollo/client'
import {
  CategoriesContainer,
  CategoryLink,
  CategoryLinksContainer,
} from './styles'
import MainSpinner from '../shared/FallBackSpinner'
import CreationButtons from './CreationButtons'
import { GET_CATEGORIES_QUERY } from '../../graphql/Query/categories'

function Categories() {
  const { loading, data } = useQuery(GET_CATEGORIES_QUERY)

  if (loading) return <MainSpinner />

  return (
    <CategoriesContainer>
      <CreationButtons />
      <CategoryLinksContainer>
        <CategoryLink to="/">r/all</CategoryLink>
        {data.categories.map((category) => (
          <CategoryLink to={`/r/${category.name}`} key={category.id}>
            r/{category.name}
          </CategoryLink>
        ))}
      </CategoryLinksContainer>
    </CategoriesContainer>
  )
}

export default Categories
