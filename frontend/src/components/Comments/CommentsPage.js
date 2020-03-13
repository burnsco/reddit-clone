import React from 'react'

const CommentsPage = ({ data: post }) => {
  return (
    <PostListContainer>
      {post.comments.map(comment => (
        <CommentsContainer key={comment.id}>
          <p>
            <strong>{comment.author.username}</strong>
          </p>
          <p>{comment.body}</p>
        </CommentsContainer>
      ))}
      <LatestComment postID={postID} />
    </PostListContainer>
  )
}

export default CommentsPage
