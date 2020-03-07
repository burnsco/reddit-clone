import React, { useState, useEffect } from 'react'

import { PostListContainer } from './styles'
import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS } from './query'
import Spinner from '../shared/FallBackSpinner'
import Post from '../Post'

function AllPosts() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS)
  const [isFetching, setIsFetching] = useState(false)

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      setIsFetching(true)
  }
  function fetchMoreListItems() {
    // attach this to a paginated apollo query (cursor)
    // so that every time we scroll down, we graph 5 more (for example)
    setTimeout(() => {
      setListItems(prevState => [
        ...prevState,
        ...Array.from(Array(20).keys(), n => n + prevState.length + 1)
      ])
      setIsFetching(false)
    }, 2000)
  }
  useEffect(() => {
    if (!isFetching) return
    fetchMoreListItems()
  }, [isFetching])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  return (
    <PostListContainer>
      {data.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default AllPosts
