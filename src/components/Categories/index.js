import React from 'react'
import {
  CategoriesContainer,
  CategoryTitles,
  ContainerTitle
} from './styles.js'
import { navigate } from '@reach/router'

const Categories = () => {
  let categories = [
    { id: 1, title: 'music', subreddit: '/r/music' },
    { id: 2, title: 'webdev', subreddit: '/r/webdev' },
    { id: 3, title: 'react', subreddit: '/r/react' },
    { id: 4, title: 'all', subreddit: '/' }
  ]
  return (
    <CategoriesContainer>
      <ContainerTitle>Subreddits</ContainerTitle>
      {categories.map(category => (
        <CategoryTitles
          onClick={() => navigate(`${category.subreddit}`)}
          key={category.id}
        >
          r/{category.title}
        </CategoryTitles>
      ))}
    </CategoriesContainer>
  )
}

export default Categories
