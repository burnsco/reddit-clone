import React from 'react'
import {
  CategoriesContainer,
  CategoryTitles,
  ContainerTitle
} from './styles.js'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES_QUERY } from './query'
import { navigate } from '@reach/router'
import MainSpinner from '../../components/shared/FallBackSpinner'

function Categories() {
  const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY)

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>Error</div>
  }

  return (
    <CategoriesContainer>
      <ContainerTitle>Subreddits</ContainerTitle>
      {data.categories.map(category => (
        <CategoryTitles
          onClick={() => navigate(`/r/${category.name}`)}
          key={category.id}
        >
          r/{category.name}
        </CategoryTitles>
      ))}
    </CategoriesContainer>
  )
}

export default Categories
