import React from 'react'
import {
  CategoriesContainer,
  CategoryTitles,
  ContainerTitle,
  CategoryLink
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
      {data.categories.map(category => (
        <CategoryLink to={`/r/${category.name}`} key={category.id}>
          r/{category.name}
        </CategoryLink>
      ))}
    </CategoriesContainer>
  )
}

export default Categories
