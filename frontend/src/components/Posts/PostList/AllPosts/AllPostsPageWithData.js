import React from 'react'
import { useQuery } from '@apollo/client'
import MainSpinner from '../../../shared/FallBackSpinner'
import PostsPage from '../../../PostList/AllPosts/PostsPage'
import { GET_ALL_POSTS_QUERY } from '../../../../graphql/Query/all_posts'
import { POSTS_SUBSCRIPTION } from '../../../../graphql/Subscription/posts'

function AllPostsPageWithData() {
  const { subscribeToMore, loading, error, ...result } = useQuery(
    GET_ALL_POSTS_QUERY
  )

  if (loading) return <MainSpinner />

  if (error) {
    return <div>Error! Return whence you came!</div>
  }

  return (
    <>
      <PostsPage
        {...result}
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
