import { gql } from '@apollo/client'

export const VOTE_ON_POST_MUTATION = gql`
  mutation onUpVotePost($postID: ID!, $voteID: ID, $type: Int!) {
    createVote(data: { postID: $postID, voteID: $voteID, type: $type }) {
      success
      message
      code
      vote {
        id
        type
      }
    }
  }
`
