import React from 'react'
import { PostListContainer } from './styles'
import Post from '../Post'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const POSTS_QUERY = gql`
  {
    posts {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

const PostList = () => {
  const linksToRender = [
    {
      id: '1',
      description: 'Prisma turns your database into a GraphQL API 😎',
      url: 'https://www.prismagraphql.com'
    },
    {
      id: '2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    }
  ]
  return (
    <PostListContainer>
      <p>Post List</p>
      <Query query={POSTS_QUERY}>
        {() => linksToRender.map(post => <Post key={post.id} post={post} />)}
      </Query>
    </PostListContainer>
  )
}

export default PostList
