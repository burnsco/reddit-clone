import React from 'react'
import { PostListContainer } from './styles'
import { useQuery } from '@apollo/react-hooks'
import { CreatePostInput } from '../../pages/CreatePost/input/styles.js'
import { GET_POSTS_BY_CATEGORY } from './query'
import Spinner from '../shared/FallBackSpinner'
import Post from '../Post'

// make this the main component, have it take "ALL" categories as default

function CategoryPosts({ category }) {
  const { loading, error, data } = useQuery(GET_POSTS_BY_CATEGORY, {
    variables: { category: category }
  })
  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  return (
    <PostListContainer>
      <CreatePostInput />
      {data.feed.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default CategoryPosts
