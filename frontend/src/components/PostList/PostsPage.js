import React, { useEffect } from 'react'
import { PostListContainer } from './styles'
import Post from '../Post'
import MainSpinner from '../shared/FallBackSpinner'

function PostsPage(data) {
  useEffect(() => {
    data.subscribeToNewPosts()
  }, [data])

  // if there are no categories asked for or we want ALL categories
  if (!data.category || data.category === 'all') {
    return (
      <>
        <h2>/r/all</h2>
        <PostListContainer>
          {data.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </PostListContainer>
      </>
    )
  }

  // asking for a specific category (subreddit)
  if (data.category) {
    let { posts } = { ...data }
    const filtered = posts.filter(post => post.category.name === data.category)

    // if ther
    if (filtered.length < 1) {
      return <div>No Posts Here</div>
    }
    return (
      <>
        <h2>/r/{data.category}</h2>
        <PostListContainer>
          {filtered.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </PostListContainer>
      </>
    )
  }
}

export default PostsPage
