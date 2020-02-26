import React from 'react'
import PostPage from './index'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const POST_QUERY = gql`
  query GetPost($postID: ID!) {
    post(postID: $postID) {
      id
      title
      url
      category
      votes
      author {
        username
      }
    }
  }
`
const PostPageWithData = postID => {
  const result = useQuery(POST_QUERY, { variables: { postID: postID } })
  return <PostPage {...result} />
}

export default PostPageWithData
