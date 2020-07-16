import React from 'react'
import { useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { GoArrowUp, GoArrowDown } from 'react-icons/go'
import { Container, Votes } from './styles'
import { UPVOTE_POST_MUTATION } from './mutation'
import { getVotes } from './getVotes'

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
  const [createVote, { error }] = useMutation(UPVOTE_POST_MUTATION)

  if (error) {
    console.log('error box')
    console.log(error)
  }

  const showVoteNumber = getVotes(votes)

  return (
    <Container>
      <UpArrow
        onClick={async () => {
          console.log('upvote')

          const vote = await createVote({
            variables: { postID, upVote: true, downVote: false },
          })
          console.log(vote)
          return vote
        }}
      />
      <Votes>{showVoteNumber || '0'}</Votes>
      <DownArrow
        onClick={async () => {
          console.log('downvote')

          const vote = await createVote({
            variables: { postID, upVote: false, downVote: true },
          })
          console.log(vote)
          return vote
        }}
      />
    </Container>
  )
}

export default VoteBox
