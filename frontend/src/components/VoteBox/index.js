import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Container, Votes } from './styles'
import styled from '@xstyled/styled-components'
import { UpArrowSquare, DownArrowSquare } from '@styled-icons/boxicons-solid'
import { CHECK_IF_USER_VOTED_QUERY } from './query'
import { UPVOTE_POST_MUTATION } from './mutation'
import MainSpinner from '../shared/FallBackSpinner'

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

const VoteBox = ({ votes, postID, currentUser }) => {
  const { hasVoted, loading, data } = useQuery(CHECK_IF_USER_VOTED_QUERY, {
    variables: { postID: postID }
  })
  const [createVote, { error }] = useMutation(UPVOTE_POST_MUTATION)

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

  console.log(data)

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>error</div>
  }

  const { upVote, downVote } = data.hasVoted

  return (
    <Container>
      <UpArrow
        style={{ color: upVote ? 'red' : 'black' }}
        onClick={async () => {
          console.log('upvote')

          const vote = await createVote({
            variables: { postID: postID, upVote: true, downVote: false }
          })
          console.log(vote)
          return vote
        }}
      />
      <Votes>{showVoteNumber}</Votes>
      <DownArrow
        style={{ color: downVote ? 'red' : 'black' }}
        onClick={async () => {
          console.log('downvote')

          const vote = await createVote({
            variables: { postID: postID, upVote: false, downVote: true }
          })
          console.log(vote)
          return vote
        }}
      />
    </Container>
  )
}

export default VoteBox
