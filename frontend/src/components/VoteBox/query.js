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
