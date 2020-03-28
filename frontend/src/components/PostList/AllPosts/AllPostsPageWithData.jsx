import React from 'react'
import { GET_ALL_POSTS_QUERY } from './query'
import PostsPage from '../PostsPagee'
import { useQuery } from '@apollo/client'
import { POSTS_SUBSCRIPTION } from '../subscription'
import MainSpinner from '../../shared/FallBackSpinner'

function AllPostsPageWithData() {
  const { subscribeToMore, data, loading, error } = useQuery(
    GET_ALL_POSTS_QUERY
  )

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
  }

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
              return Object.assign({}, prev, {
                posts: [newFeedItem, ...prev.posts]
              })
            }
          })
        }
      />
    </>
  )
}

export default AllPostsPageWithData
