import React from 'react'
import PostsPage from './PostsPage'
import { useAllPostsQuery } from '../../../generated/graphql'
import { Skeleton } from '@chakra-ui/core'

function AllPostsPageWithData() {
  const { data, loading, error } = useAllPostsQuery({
    pollInterval: 5500
  })

  if (error) {
    return <div>Error! Contact site admin.</div>
  }

  return (
    <Skeleton colorStart="pink" colorEnd="orange" isLoaded={!loading}>
      <PostsPage {...data} />
    </Skeleton>
  )
}

export default AllPostsPageWithData
