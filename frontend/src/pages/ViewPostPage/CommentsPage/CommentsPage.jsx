import React, { useEffect, useState } from 'react'
import {
  CommentsContainer,
  CommentCreatedAt,
  CommentBody,
  CommentHeader,
  UserName,
} from '../styles'
import { timeDifferenceForDate } from '../../../utils/timeDifferenceForDate'
import { CommentFooter } from './styles'
import DeleteComment from './DeleteComment'
import CreateCommentForm from '../../../components/CreateComment'
import EditComment from './EditComment'

function CommentsPage(props) {
  const [showComment, setShowComment] = useState(true)
  const { subscribeToNewComments } = props
  const { comments } = props.data.post
  const { postID, refetch } = props

  useEffect(() => {
    const unsubscribe = subscribeToNewComments()
    return function cleanUp() {
      unsubscribe()
    }
  }, [subscribeToNewComments])

  return (
    <>
      <CreateCommentForm refetch={refetch} postID={postID} />

      {comments.map(comment => (
        <CommentsContainer key={`comment-${comment.id}-${comment.body}`}>
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
          <CommentFooter>
            <EditComment commentID={comment.id} postID={postID} />
            <DeleteComment
              commentID={comment.id}
              postID={postID}
              refetch={refetch}
            />
          </CommentFooter>
        </CommentsContainer>
      ))}
    </>
  )
}

export default CommentsPage
