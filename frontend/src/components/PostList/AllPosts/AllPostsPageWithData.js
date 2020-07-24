import React from 'react'
import { useQuery } from '@apollo/client'
import PostsPage from './PostsPage'
import MainSpinner from '../../shared/FallBackSpinner'
import { GET_ALL_POSTS_QUERY } from '../../../graphql/Query/all_posts'
import { POSTS_SUBSCRIPTION } from '../../../graphql/Subscription/posts'

function AllPostsPageWithData() {
  const { subscribeToMore, data, loading, error } = useQuery(
    GET_ALL_POSTS_QUERY
  )

  if (loading) return <MainSpinner />

  if (error) {
    console.log('all posts page error ==>')
    console.log(error)
    return <div>Error, contact admin.</div>
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
              return { ...prev, posts: [newFeedItem, ...prev.posts] }
            },
          })
        }
      />
    </>
  )
}

export default AllPostsPageWithData
