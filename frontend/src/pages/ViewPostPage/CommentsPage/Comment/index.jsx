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
import { useMutation } from '@apollo/client'
import DeleteComment from '../DeleteComment'
import { timeDifferenceForDate } from '../../../../utils/timeDifferenceForDate'
import { UPDATE_COMMENT_MUTATION } from '../EditComment/mutation'

const CommentComponent = ({ postID, refetch, comment }) => {
  const [editComment, { loading, error, data }] = useMutation(
    UPDATE_COMMENT_MUTATION
  )

  const [showComment, setShowComment] = useState(true)

  let input

  const saveCancel = () => (
    <>
      <button
        onClick={() => {
          editComment({
            variables: {
              body: input.value,
              postID: postID,
              commentID: comment.id,
            },
          })
          refetch()
        }}
      >
        Save
      </button>
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
        comment={comment.body}
      />
      <DeleteComment commentID={comment.id} postID={postID} refetch={refetch} />
    </>
  )

  const hasBeenEdited = (created, updated) => {
    if (created !== updated) {
      return 'edited ' + timeDifferenceForDate(updated)
    } else {
      return timeDifferenceForDate(created)
    }
  }

  return (
    <CommentsContainer>
      <CommentHeader>
        <UserName to={`/r/profile/${comment.createdBy.username}`}>
          {' '}
          <strong>{comment.createdBy.username}</strong>
        </UserName>
        <CommentCreatedAt>
          {/* TODO make this calculate if its been updated */}
          {hasBeenEdited(comment.createdAt, comment.updatedAt)}
        </CommentCreatedAt>
      </CommentHeader>

      {showComment ? (
        <CommentBody>{comment.body}</CommentBody>
      ) : (
        <CommentBody>
          <input
            ref={node => {
              input = node
            }}
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
