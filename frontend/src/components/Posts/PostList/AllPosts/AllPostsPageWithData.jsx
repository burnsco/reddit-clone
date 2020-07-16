import React from 'react'
import { useQuery } from '@apollo/client'
import PostsPage from '../PostsPage'
import { GET_ALL_POSTS_QUERY } from '../../../PostList/AllPosts/query'
import { POSTS_SUBSCRIPTION } from '../../../PostList/subscription'

function AllPostsPageWithData() {
  const { subscribeToMore, data, loading } = useQuery(GET_ALL_POSTS_QUERY)

  if (loading) return <div>...loading</div>

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
