import React from 'react'
import { useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { GoArrowUp, GoArrowDown } from 'react-icons/go'
import { Container, Votes } from './styles'
import { getVotes } from './getVotes'
import { UPVOTE_POST_MUTATION } from '../../VoteBox/mutation'

const UpArrow = styled(GoArrowUp)`
  &:hover {
    color: red;
  }
`

const DownArrow = styled(GoArrowDown)`
  &:hover {
    color: red;
  }
`

const VoteBox = ({ votes, postID }) => {
  const [createVote] = useMutation(UPVOTE_POST_MUTATION)

  const showVoteNumber = getVotes(votes)

  return (
    <Container>
      <UpArrow
        onClick={async () => {
          const vote = await createVote({
            variables: { postID, upVote: true, downVote: false },
          })

          return vote
        }}
      />
      <Votes>{showVoteNumber || '0'}</Votes>
      <DownArrow
        onClick={async () => {
          const vote = await createVote({
            variables: { postID, upVote: false, downVote: true },
          })

          return vote
        }}
      />
    </Container>
  )
}

export default VoteBox
