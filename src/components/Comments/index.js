import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Spinner from "../shared/FallBackSpinner"
import { PostListContainer } from "../PostList/styles"
import { GET_POST_AND_COMMENTS } from "./query"
import Post from "../Post"

// Visit this via /r/${category}/comments/${postID}
// then push the post into the post container
// then push the comments in a list beneath the post

function Comments({ postID }) {
  const { loading, error, data } = useQuery(GET_POST_AND_COMMENTS, {
    variables: { postID: postID }
  })

  if (loading) return <Spinner />
  if (error) return <h1>Error!</h1>

  return (
    <PostListContainer>
      {data.posts.map(post => (
        <>
          <Post key={post.id} post={post} />
          <Comments key={post.comments.id} comments={post.comments} />
        </>
      ))}
    </PostListContainer>
  )
}

export default Comments
