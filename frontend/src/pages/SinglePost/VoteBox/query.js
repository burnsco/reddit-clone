import { gql } from '@apollo/client'

export const CHECK_IF_USER_VOTED_QUERY = gql`
  query onCheckIfUserVoted($postID: ID!) {
    hasVoted(postID: $postID) {
      code
      success
      message
      upVote
      downVote
    }
  }
`

export const GET_VOTES_QUERY = gql`
  query onGetVotes($postID: ID!) {
    post(postID: $postID) {
      votes {
        id
        upVote
        downVote
      }
    }
  }
`
