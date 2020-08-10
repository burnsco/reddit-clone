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

export default function Categories() {
  const { loading, data, error } = useQuery(GET_CATEGORIES_QUERY)

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
  }

  return (
    <CategoriesContainer>
      <CreationButtons />
      <CategoryLinksContainer p="2">
        <CategoryLink to="/">r/all</CategoryLink>
        {data.categories.map((category) => (
          <CategoryLink
            to={`/r/${category.name}`}
            key={`category-${category.id}`}
          >
            r/{category.name}
          </CategoryLink>
        ))}
      </CategoryLinksContainer>
    </CategoriesContainer>
  )
}
