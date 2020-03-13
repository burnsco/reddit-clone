import React from 'react'
import { PostListContainer } from './styles'
import { useQuery } from '@apollo/client'
import { POSTS_QUERY } from './query'
import Spinner from '../shared/FallBackSpinner'
import Post from '../Post'

function AllPosts() {
  const { data, loading, error } = useQuery(POSTS_QUERY, {
    variables: { first: 50, skip: 0 }
  })

  console.log(data)
  if (loading) return <Spinner />

  if (error) {
    console.log(error)
    return <div>error</div>
  }

  return (
    <PostListContainer>
      {data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default AllPosts
