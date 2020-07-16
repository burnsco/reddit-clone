import React from 'react'
import { useQuery } from '@apollo/client'
import PostsPage from '../PostsPage'
import { GET_POSTS_BY_CATEGORY_QUERY } from '../../../PostList/CategoryPosts/query'
import { POSTS_SUBSCRIPTION } from '../../../PostList/subscription'

function CategoryPostsPageWithData({ category }) {
  const { subscribeToMore, data, loading } = useQuery(GET_POSTS_BY_CATEGORY_QUERY, {
    variables: { query: category },
  })

  if (loading) return <div>...loading</div>

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

export default CategoryPostsPageWithData
