import React from 'react'
import {
  CategoriesContainer,
  CategoryTitles,
  ContainerTitle
} from './styles.js'

const Categories = () => {
  let categories = [
    { id: 1, title: 'r/movies' },
    { id: 2, title: 'r/television' },
    { id: 3, title: 'r/webdev' },
    { id: 4, title: 'r/all' },
    { id: 5, title: 'r/frontend' },
    { id: 6, title: 'r/react' },
    { id: 7, title: 'r/funny' }
  ]
  return (
    <CategoriesContainer>
      <ContainerTitle>Subreddits</ContainerTitle>
      {categories.map(category => (
        <CategoryTitles key={category.id}>{category.title}</CategoryTitles>
      ))}
    </CategoriesContainer>
  )
}

export default Categories
