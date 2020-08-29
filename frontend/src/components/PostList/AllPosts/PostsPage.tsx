import React from 'react'
import { PostListContainer } from '../styles'
import Post from '../../Post'
import { AllPostsQuery } from '../../../generated/graphql'

const PostsPage: React.FC<AllPostsQuery | undefined> = ({ posts }) => {
  if (posts.length === 0) {
    return <div>No posts here</div>
  }

  return (
    <PostListContainer>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default PostsPage
