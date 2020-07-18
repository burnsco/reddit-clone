import React from 'react'
import {useMutation} from '@apollo/client'
import {Container, Votes} from './styles'
import styled from 'styled-components'
import {UpArrowSquare, DownArrowSquare} from '@styled-icons/boxicons-solid'
import {UPVOTE_POST_MUTATION} from './mutation'
import {getVotes} from './getVotes'

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

const VoteBox = ({votes, postID}) => {
  const [createVote, {error}] = useMutation(UPVOTE_POST_MUTATION)

  if (error) {
    console.log('error box')
    console.log(error)
  }

  let showVoteNumber = getVotes(votes)

  return (
    <Container>
      <UpArrow
        onClick={async () => {
          console.log('upvote')

          const vote = await createVote({
            variables: {postID: postID, upVote: true, downVote: false},
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
            variables: {postID: postID, upVote: false, downVote: true},
          })
          console.log(vote)
          return vote
        }}
      />
    </Container>
  )
}

export default VoteBox
