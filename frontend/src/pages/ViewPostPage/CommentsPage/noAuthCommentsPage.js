import React, { useEffect } from 'react'
import {
  CommentCreatedAt,
  CommentBody,
  CommentHeader,
  UserName,
} from '../styles'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate'
import { CommentFooter } from './styles'
import Container from '../../../styles/components/Container'
import Box from '../../../styles/components/Box'

function CommentsPage(props) {
  const { subscribeToNewComments } = props
  // eslint-disable-next-line react/destructuring-assignment
  const { comments } = props.data.post

  useEffect(() => {
    const unsubscribe = subscribeToNewComments()
    return function cleanUp() {
      unsubscribe()
    }
  }, [subscribeToNewComments])

  return (
    <Container mx={[2, 3, 4]} my={[2, 3, 4]}>
      {comments.map((comment) => (
        <Box key={`comment-${comment.id}-${comment.body}`}>
          <CommentHeader>
            <UserName to={`/r/profile/${comment.createdBy.username}`}>
              {' '}
              <strong>{comment.createdBy.username}</strong>
            </UserName>
            <CommentCreatedAt>
              {timeDifferenceForDate(comment.createdAt)}
            </CommentCreatedAt>
          </CommentHeader>

          <CommentBody>{comment.body}</CommentBody>
          <CommentFooter />
        </Box>
      ))}
    </Container>
  )
}
export default CommentsPage
