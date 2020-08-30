import React from 'react'
import { PostListContainer } from '../styles'
import PostPage from '../../Post/Post'
import { AllPostsQuery } from '../../../generated/graphql'

const PostsPage: React.FC<AllPostsQuery> = ({ posts }) => {
  if (!posts) {
    return <div>No posts here</div>
  }

  return (
    <PostListContainer>
      {posts.map(post => (
        <PostPage key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default PostsPage
