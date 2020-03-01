import gql from 'graphql-tag'

export const GET_POST_AND_COMMENTS = gql`
  query getPostsAndComments($postID: String!) {
    post(postID: $postID) {
      id
      title
      url
      category
      author {
        username
      }
      votes
      comments {
        id
        body
        author {
          username
        }
      }
    }
  }
`
