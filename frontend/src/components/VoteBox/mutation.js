import { gql } from '@apollo/client'

export const UPVOTE_POST_MUTATION = gql`
  mutation upVotePost(userID: ID!) {
    onUpvotePost(userID: $userID) {
      code
      success
      message
    }
  }
`

export const DOWNVOTE_POST_MUTATION = gql`
  mutation upVotePost(userID: ID!) {
    onUpvotePost(userID: $userID) {
      code
      success
      message
    }
  }
`
