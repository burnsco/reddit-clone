import React from 'react'
import { PostListContainer } from './styles'
import { CreatePostInput } from '../CreatePost/input/styles'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS_BY_CATEGORY } from './query'
import Spinner from '../shared/FallBackSpinner'
import Post from '../Post'

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
