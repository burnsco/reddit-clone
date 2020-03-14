import React from 'react'
import {
  CategoriesContainer,
  CategoryTitles,
  ContainerTitle
} from './styles.js'
import Spinner from '../../components/shared/FallBackSpinner'
import { navigate } from '@reach/router'
import { useQuery, gql } from '@apollo/client'
import MainSpinner from '../../components/shared/FallBackSpinner'

const GET_CATEGORIES = gql`
  {
    categories {
      id
      name
    }
  }
`

function Categories() {
  const { loading, error, data } = useQuery(GET_CATEGORIES)

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
