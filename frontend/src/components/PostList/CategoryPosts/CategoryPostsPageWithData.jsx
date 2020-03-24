import React from 'react'
import { GET_POSTS_BY_CATEGORY_QUERY } from './query'
import PostsPage from './PostsPage'
import { useQuery } from '@apollo/client'
import { POSTS_SUBSCRIPTION } from '../subscription'
import MainSpinner from '../../shared/FallBackSpinner'

function CategoryPostsPageWithData({ category }) {
  const { subscribeToMore, data, loading, error } = useQuery(
    GET_POSTS_BY_CATEGORY_QUERY,
    {
      variables: { query: category }
    }
  )

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>Error, please return to main page</div>
  }

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

export default CategoryPostsPageWithData
