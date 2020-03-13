import React from 'react'
import { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY, POSTS_QUERY } from './query'
import PostsPage from './PostsPage'
import { gql, useQuery, updateQuery } from '@apollo/client'
import { POSTS_SUBSCRIPTION } from './subscription'
import MainSpinner from '../shared/FallBackSpinner'

function PostsPageWithData() {
  const { subscribeToMore, data, loading, error } = useQuery(POSTS_QUERY)

  console.log('parent post page data')

  console.log(data)

  if (loading) return <MainSpinner />

  return (
    <PostsPage
      {...data}
      subscribeToNewPosts={() =>
        subscribeToMore({
          document: POSTS_SUBSCRIPTION,
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
