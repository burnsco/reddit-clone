import React from 'react'
import styled from 'styled-components'
import { UpArrowSquare, DownArrowSquare } from '@styled-icons/boxicons-solid'
import { Container, Votes } from './styles'

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

const VoteBox = () => (
  <Container>
    <UpArrow />
    <Votes>0</Votes>
    <DownArrow />
  </Container>
)

export default VoteBox
