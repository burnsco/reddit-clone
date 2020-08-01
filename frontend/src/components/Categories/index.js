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
import { GET_POSTS_BY_CATEGORY_QUERY } from '../../graphql/Query/category_posts'

function Categories() {
  const { loading, data, client } = useQuery(GET_CATEGORIES_QUERY)

  if (loading) return <MainSpinner />

  return (
    <CategoriesContainer>
      <CreationButtons />
      <CategoryLinksContainer p="2">
        <CategoryLink to="/">r/all</CategoryLink>
        {data.categories.map((category) => (
          <CategoryLink
            onMouseOver={() => {
              client.query({
                query: GET_POSTS_BY_CATEGORY_QUERY,
                variables: { query: category.name },
              })
            }}
            to={`/r/${category.name}`}
            key={category.id}
          >
            r/{category.name}
          </CategoryLink>
        ))}
      </CategoryLinksContainer>
    </CategoriesContainer>
  )
}

export default Categories
