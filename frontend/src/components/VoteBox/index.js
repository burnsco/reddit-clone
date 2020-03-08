import React from 'react'
import { Container, Upvote, Downvote, Votes } from './styles'
import { UpArrowSquare, DownArrowSquare } from '@styled-icons/boxicons-solid'

const VoteBox = ({ votes }) => (
  <Container>
    <UpArrowSquare />
    <Votes>{votes} </Votes>
    <DownArrowSquare />
  </Container>
)

export default VoteBox
