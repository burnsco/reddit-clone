import React from 'react'
import { PostListContainer } from '../styles'
import { useQuery } from '@apollo/client'
import Post from '../../../components/Post'
import { GET_USER_POSTS_QUERY } from './query'
import MainSpinner from '../../../components/shared/FallBackSpinner'

const ProfilePosts = () => {
  const { data, loading, error } = useQuery(GET_USER_POSTS_QUERY)

  if (loading) return <MainSpinner />
  if (error) {
    console.log(error)
  }

  return (
    <PostListContainer>
      {data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default ProfilePosts
