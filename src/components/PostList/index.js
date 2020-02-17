import React from 'react'
import { PostListContainer } from './styles'
import Post from '../Post'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const POSTS_QUERY = gql`
  {
    posts {
      links {
        id
        createdAt
        url
        title
      }
    }
  }
`

function PostList() {
  const { loading, error, data } = useQuery(POSTS_QUERY)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <PostListContainer>
      {data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default PostList
