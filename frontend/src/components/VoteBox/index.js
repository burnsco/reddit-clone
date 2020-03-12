import React from 'react'
import { Container, Upvote, Downvote, Votes } from './styles'
import styled from '@xstyled/styled-components'
import { UpArrowSquare, DownArrowSquare } from '@styled-icons/boxicons-solid'

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

const VoteBox = ({ votes }) => (
  <Container>
    <UpArrow />
    <Votes>{votes} </Votes>
    <DownArrow />
  </Container>
)

export default VoteBox
