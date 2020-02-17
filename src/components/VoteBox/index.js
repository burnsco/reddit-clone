import React from 'react'
import { Container, Upvote, Downvote, Votes } from './styles'

const VoteBox = () => {
  return (
    <Container>
      <Upvote />
      <Votes> 5 </Votes>
      <Downvote />
    </Container>
  )
}

export default VoteBox
