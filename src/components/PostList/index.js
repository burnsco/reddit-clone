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
        title
      }
    }
  }
`

const PostList = () => {
  const linksToRender = [
    {
      id: '1',
      title: 'Prisma turns your database into a GraphQL API 😎',
      url: 'https://www.prismagraphql.com',
      comments: 5,
      category: '/a/programming',
      author: 'cburns',
      votes: 5
    },
    {
      id: '2',
      title: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/',
      comments: 0,
      category: '/a/music',
      author: 'frankc',
      votes: 10
    }
  ]
  return (
    <PostListContainer>
      <Query query={POSTS_QUERY}>
        {() => linksToRender.map(post => <Post key={post.id} post={post} />)}
      </Query>
    </PostListContainer>
  )
}

export default PostList
