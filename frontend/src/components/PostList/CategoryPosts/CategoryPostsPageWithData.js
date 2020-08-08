import React from 'react'
import { useQuery } from '@apollo/client'
import PostsPage from '../PostsPage'
import { GET_POSTS_BY_CATEGORY_QUERY } from '../../../graphql/Query/category_posts'
import MainSpinner from '../../shared/FallBackSpinner'
import { POSTS_SUBSCRIPTION } from '../../../graphql/Subscription/posts'

export default function CategoryPostsPageWithData({ category }) {
  const { subscribeToMore, data, loading, error } = useQuery(
    GET_POSTS_BY_CATEGORY_QUERY,
    {
      variables: { query: category },
      pollInterval: 900,
    }
  )

  if (loading) return <MainSpinner />

  if (error) {
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
            return { ...prev, posts: [newFeedItem, ...prev.posts] }
          },
        })
      }
    />
  )
}
