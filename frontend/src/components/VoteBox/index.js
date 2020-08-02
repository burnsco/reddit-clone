/* eslint-disable no-shadow */
import React, { useState } from 'react'
import styled from 'styled-components'
import { UpArrowSquare, DownArrowSquare } from '@styled-icons/boxicons-solid'
import { useMutation } from '@apollo/client'
import { Container, Votes } from './styles'
import { VOTE_ON_POST_MUTATION } from '../../graphql/Mutation/votes'

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

const VoteBox = ({ votes, score, postID }) => {
  const [userVotes] = useState(votes)
  console.log(userVotes)

  const [createVote, { data, error }] = useMutation(VOTE_ON_POST_MUTATION)

  if (error) {
    console.log(error)
  }
  console.log(userVotes)
  // JUST WORKING FOR NEW VOTING
  // HAVE TO CHECK { userVotes } in order to show what user
  //  has voted previously
  return (
    <Container>
      <UpArrow
        onClick={() => {
          console.log(`upvote`)

          createVote({
            variables: { postID, type: 1 },
          })
          console.log(data)
        }}
      />
      <Votes>{score}</Votes>
      <DownArrow
        onClick={() => {
          console.log('downvote')

          createVote({
            variables: { postID, type: -1 },
          })
          console.log(data)
        }}
      />
    </Container>
  )
}
export default VoteBox
