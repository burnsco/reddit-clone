import React, { useState } from 'react'
import {
  CommentsContainer,
  CommentHeader,
  UserName,
  CommentCreatedAt,
  CommentBody,
} from '../../styles'
import { CommentFooter } from '../styles'
import EditComment from '../EditComment'
import DeleteComment from '../DeleteComment'
import { timeDifferenceForDate } from '../../../../utils/timeDifferenceForDate'

const CommentComponent = ({ postID, refetch, comment }) => {
  const [showComment, setShowComment] = useState(true)

  const saveCancel = () => (
    <>
      <button>Save</button>
      <button onClick={() => setShowComment(!showComment)}>Cancel</button>
    </>
  )

  const editDelete = () => (
    <>
      <EditComment
        onEdit={{ showComment, setShowComment }}
        refetch={refetch}
        commentID={comment.id}
        postID={postID}
      />
      <DeleteComment commentID={comment.id} postID={postID} refetch={refetch} />
    </>
  )

  return (
    <CommentsContainer>
      <CommentHeader>
        <UserName to={`/r/profile/${comment.createdBy.username}`}>
          {' '}
          <strong>{comment.createdBy.username}</strong>
        </UserName>
        <CommentCreatedAt>
          {timeDifferenceForDate(comment.createdAt)}
        </CommentCreatedAt>
      </CommentHeader>

      {showComment ? (
        <CommentBody>{comment.body}</CommentBody>
      ) : (
        <CommentBody>
          <input
            type="text"
            defaultValue={comment.body}
            style={{ marginTop: 10 + 'rpx' }}
          />
        </CommentBody>
      )}

      <CommentFooter>
        {!showComment ? saveCancel() : null}
        {showComment ? editDelete() : null}
      </CommentFooter>
    </CommentsContainer>
  )
}

export default CommentComponent
