import React from 'react'
import { Container, Upvote, Downvote, Votes } from './styles'

const VoteBox = ({ votes }) => (
  <Container>
    <Upvote />
    <Votes>{votes} </Votes>
    <Downvote />
  </Container>
)

export default VoteBox
