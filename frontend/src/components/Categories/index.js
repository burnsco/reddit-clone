import React from 'react'
import {
  CategoriesContainer,
  CategoryTitles,
  ContainerTitle
} from './styles.js'
import Spinner from '../../components/shared/FallBackSpinner'
import { navigate } from '@reach/router'
import { useQuery, gql } from '@apollo/client'

const GET_CATEGORIES = gql`
  {
    categories {
      id
      title
    }
  }
`

function Categories() {
  const { loading, error, data } = useQuery(GET_CATEGORIES)

  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  return (
    <CategoriesContainer>
      <ContainerTitle>Subreddits</ContainerTitle>
      {data.categories.map(category => (
        <CategoryTitles
          onClick={() => navigate(`/r/${category.title}`)}
          key={category.id}
        >
          r/{category.title}
        </CategoryTitles>
      ))}
    </CategoriesContainer>
  )
}

export default Categories