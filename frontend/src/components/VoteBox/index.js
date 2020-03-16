import React from 'react'
import { useMutation } from '@apollo/client'
import { Container, Upvote, Downvote, Votes } from './styles'
import styled from '@xstyled/styled-components'
import GetNumberOfVotes from './getVotes'
import { UpArrowSquare, DownArrowSquare } from '@styled-icons/boxicons-solid'
import { UPVOTE_POST_MUTATION } from './mutation'

const UpArrow = styled(UpArrowSquare)`
  &:hover {
    color: red;
  }
`

const DownArrow = styled(DownArrowSquare)`
  &:hover {
    color: red;
  }
`

const VoteBox = ({ votes, postID }) => {
  const [vote, { error }] = useMutation(UPVOTE_POST_MUTATION, {
    variables: { postID: postID, upVote: true, downVote: false }
  })

  let showVoteNumber = 0

  if (votes.length > 0) {
    votes.forEach(vote => {
      if (vote.upVote) {
        showVoteNumber += 1
      }
      if (vote.downVote) {
        showVoteNumber -= 1
      }
    })
  }

  return (
    <Container>
      <UpArrow
        onClick={async () => {
          console.log('upvote')
          await vote()
        }}
      />
      <Votes>{showVoteNumber}</Votes>
      <DownArrow onClick={() => console.log('downvote')} />
    </Container>
  )
}

export default VoteBox
