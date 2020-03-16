import { number } from 'prop-types'

export default function GetNumberOfVotes(votes) {
  if (votes.length === 0) {
    return '0'
  }
  if (votes.length > 0) {
    let numberOfUpVotes = 0
    votes.forEach(vote => {
      if (vote.upVote) {
        numberOfUpVotes += 1
      }
      if (vote.downVote) {
        numberOfUpVotes -= 1
      }
      console.log(numberOfUpVotes)
      return {
        numberOfUpVotes
      }
    })
  }
}
