import React from 'react'
import {
  CategoriesContainer,
  CategoryTitles,
  ContainerTitle,
  ContainerHeader,
  CategoryLink,
  CategoryLinksContainer
} from './styles.js'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES_QUERY } from './query'
import { navigate } from '@reach/router'
import MainSpinner from '../../components/shared/FallBackSpinner'
import NavLink from '../shared/NavLink/index.js'

function Categories() {
  const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY)

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>Error</div>
  }

  return (
    <CategoriesContainer>
      <ContainerHeader to="/submit">Create Post</ContainerHeader>
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
