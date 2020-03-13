import React from 'react'
import { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY } from './query'
import PostsPage from './PostsPage'
import { gql, useQuery, updateQuery } from '@apollo/client'

const POSTS_SUBSCRIPTION = gql`
  subscription onPostAdded {
    postAdded {
      node {
        id
        title
        text
        createdAt
        comments {
          id
          body
          author {
            username
          }
        }
        author {
          username
        }
        category {
          name
        }
      }
    }
  }
`

function PostsPageWithData({ category }) {
  const { subscribeToMore, ...result } = useQuery(GET_ALL_POSTS)

  return (
    <PostsPage
      {...result}
      subscribeToNewPosts={() =>
        subscribeToMore({
          document: POSTS_SUBSCRIPTION,
          variables: { category: category },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev
            const newFeedItem = subscriptionData.data.postAdded.node
            return Object.assign({}, prev, {
              posts: [newFeedItem, ...prev.posts]
            })
          }
        })
      }
    />
  )
}

export default PostsPageWithData
