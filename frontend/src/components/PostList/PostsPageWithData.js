import React from 'react'
import { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY, POSTS_QUERY } from './query'
import PostsPage from './PostsPage'
import { gql, useQuery, updateQuery } from '@apollo/client'
import { POSTS_SUBSCRIPTION } from './subscription'
import MainSpinner from '../shared/FallBackSpinner'

function PostsPageWithData({ category }) {
  const { subscribeToMore, data, loading, error } = useQuery(POSTS_QUERY)

  if (loading) return <MainSpinner />
  if (error) {
    console.log(error)
    return <div>Error, please return to main page</div>
  }

  return (
    <PostsPage
      {...data}
      category={category}
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
