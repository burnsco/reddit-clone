import React from 'react'
import { PostListContainer } from './styles'
import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS } from './query'
import Spinner from '../shared/FallBackSpinner'
import Post from '../Post'

// show a certain amount, then when at bottom show another certain amount
//  make it so the user can choose

function AllPosts() {
  const { data, loading, error } = useQuery(GET_ALL_POSTS, {
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
