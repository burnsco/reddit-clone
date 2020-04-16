import React from 'react'
import {
  CategoriesContainer,
  ContainerHeader,
  CategoryLink,
  CategoryLinksContainer,
} from './styles.js'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES_QUERY } from './query'
import MainSpinner from '../shared/FallBackSpinner'

function Categories() {
  const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY)

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
  }

  return (
    <CategoriesContainer>
      <ContainerHeader to="/submit">Post</ContainerHeader>
      <ContainerHeader to="/createCategory">Category</ContainerHeader>

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
