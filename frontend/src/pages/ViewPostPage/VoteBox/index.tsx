import React from "react"
import styled from "@emotion/styled"
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi"
import { Container, Votes } from "./styles"
import { useCastVoteMutation } from "../../../generated/graphql"

const UpArrow = styled(HiArrowCircleUp)`
  &:hover {
    color: red;
  }
`

const DownArrow = styled(HiArrowCircleDown)`
  &:hover {
    color: red;
  }
`

const VoteBox: React.FC<{ score: number; postID: string }> = ({
  score,
  postID
}) => {
  const [createVote, { error }] = useCastVoteMutation()

  if (error) {
    console.log(error)
  }

  return (
    <Container>
      <UpArrow
        onClick={() => {
          createVote({
            variables: { postID, type: 1 }
          })
        }}
      />
      <Votes>{score}</Votes>
      <DownArrow
        onClick={() => {
          createVote({
            variables: { postID, type: -1 }
          })
        }}
      />
    </Container>
  )
}
export default VoteBox
