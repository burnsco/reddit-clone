import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS_QUERY } from './query'
import PostsPage from './PostsPage'
import { POSTS_SUBSCRIPTION } from '../subscription'
import MainSpinner from '../../shared/FallBackSpinner'

function AllPostsPageWithData() {
  const { subscribeToMore, data, loading } = useQuery(GET_ALL_POSTS_QUERY)

  if (loading) return <MainSpinner />

  return (
    <>
      <PostsPage
        {...data}
        subscribeToNewPosts={() =>
          subscribeToMore({
            document: POSTS_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev
              const newFeedItem = subscriptionData.data.postAdded.node
              return { ...prev, posts: [newFeedItem, ...prev.posts] }
            },
          })
        }
      />
    </>
  )
}

export default AllPostsPageWithData
