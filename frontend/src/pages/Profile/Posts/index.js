import React from 'react'
import { useQuery } from '@apollo/client'
import { PostListContainer } from '../styles'
import Post from '../../../components/Post'
import MainSpinner from '../../../components/shared/FallBackSpinner'
import { GET_USER_POSTS_QUERY } from '../../../graphql/Query/user_posts'

const ProfilePosts = () => {
  const { data, loading, error } = useQuery(GET_USER_POSTS_QUERY)

  if (loading) return <MainSpinner />
  if (error) {
    console.log(error)
  }

  return (
    <PostListContainer>
      {data.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default ProfilePosts
