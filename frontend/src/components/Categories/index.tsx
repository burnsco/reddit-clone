import React from 'react'
import CreationButtons from './CreationButtons'
import { useAllCategoriesQuery } from '../../generated/graphql'
import { Flex, Link, Skeleton } from '@chakra-ui/core'
import { Link as ReachLink } from '@reach/router'

const Categories = () => {
  const { loading, data, error } = useAllCategoriesQuery()

  if (error) {
    console.log(error)
  }

  return (
    <Skeleton colorStart="pink" colorEnd="orange" isLoaded={!loading}>
      <Flex
        ml="1"
        direction="column"
        border="1px"
        borderRadius="sm"
        borderColor="gray.300"
        backgroundColor="white"
        as="aside"
      >
        <CreationButtons />

        <Flex direction="column" p="2">
          <ReachLink to="/">
            <Link>r/all</Link>
          </ReachLink>

          {data?.categories.map(category => (
            <ReachLink
              to={`/r/${category.name}`}
              key={`category-${category.id}`}
            >
              <Link>r/{category.name}</Link>
            </ReachLink>
          ))}
        </Flex>
      </Flex>
    </Skeleton>
  )
}

export default Categories
