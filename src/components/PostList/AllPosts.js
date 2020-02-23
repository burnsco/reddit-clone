import React from 'react'
import { PostListContainer } from './styles'
import { CreatePostInput } from '../../pages/CreatePost/input/styles.js'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_POSTS } from './query'
import Spinner from '../shared/FallBackSpinner'
import Post from '../Post'

function AllPosts({ category }) {
  const { loading, error, data } = useQuery(GET_ALL_POSTS)

  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  return (
    <PostListContainer>
      <CreatePostInput />
      {data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default AllPosts
