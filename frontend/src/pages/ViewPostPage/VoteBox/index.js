import React, { useState } from 'react'
import styled from 'styled-components'
import { Heart, HeartFill } from '@styled-icons/bootstrap'
import { Container } from './styles'

const UnLikedHeart = styled(Heart)`
  color: 'white';
  &:hover {
    color: red;
  }
`

const LikedHeart = styled(HeartFill)`
  color: 'pink';
  &:hover {
    color: white;
  }
`

const VoteBox = ({ voted }) => {
  const [vote, setVote] = useState(false)
  const toggleVote = () => {
    setVote(!vote)
  }

  return (
    <Container onClick={toggleVote}>
      {voted ? <LikedHeart /> : <UnLikedHeart />}
    </Container>
  )
}
export default VoteBox
