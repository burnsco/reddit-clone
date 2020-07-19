export function getVotes(votes) {
  let showVoteNumber = 0
  if (votes.length > 0) {
    votes.forEach((vote) => {
      if (vote.upVote) {
        showVoteNumber += 1
      }
      if (vote.downVote) {
        showVoteNumber -= 1
      }
    })
    return showVoteNumber
  }
}
