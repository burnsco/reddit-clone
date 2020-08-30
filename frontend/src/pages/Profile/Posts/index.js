import React from 'react'
import { useQuery } from '@apollo/client'
import Post from '../../../components/Post/Post'
import MainSpinner from '../../../components/shared/FallBackSpinner'
import { GET_USER_POSTS_QUERY } from '../../../graphql/Query/user_posts'

const ProfilePosts = props => {
  const { userID } = props
  const { data, loading, error } = useQuery(GET_USER_POSTS_QUERY, {
    variables: { userID },
  })

  if (loading) return <MainSpinner />
  if (error) {
    console.log(error)
    return <div>error! contact admin</div>
  }

  return (
    <>
      {data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default ProfilePosts
