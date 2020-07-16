import { gql } from '@apollo/client'

export const UPVOTE_POST_MUTATION = gql`
  mutation onUpVotePost($postID: ID!, $downVote: Boolean!, $upVote: Boolean!) {
    createVote(data: { postID: $postID, downVote: $downVote, upVote: $upVote }) {
      code
      success
      message
    }
  }
`
