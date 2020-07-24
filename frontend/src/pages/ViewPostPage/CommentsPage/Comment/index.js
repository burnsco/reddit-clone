import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import {
  CommentHeader,
  UserName,
  CommentCreatedAt,
  CommentBody,
} from '../../styles'
import { CommentFooter } from '../styles'
import EditComment from '../EditComment'
import DeleteComment from '../DeleteComment'
import { timeDifferenceForDate } from '../../../../utils/timeDifferenceForDate'
import MainSpinner from '../../../../components/shared/FallBackSpinner'
import { CURRENT_USER_QUERY } from '../../../../graphql/Query/current_user'
import { UPDATE_COMMENT_MUTATION } from '../../../../graphql/Mutation/update_comment'
import Box from '../../../../styles/components/Box'

const CommentComponent = ({ postID, refetch, comment }) => {
  const { data } = useQuery(CURRENT_USER_QUERY)
  const [editComment, { loading, error }] = useMutation(UPDATE_COMMENT_MUTATION)
  const [showComment, setShowComment] = useState(true)

  let input

  const commentCreatedBy = comment.createdBy.id
  const userID = data.currentUser.id

  if (loading) return <MainSpinner />
  if (error) return <div>error!</div>

  const saveCancel = () => {
    if (commentCreatedBy === userID) {
      return (
        <>
          <button
            onClick={() => {
              editComment({
                variables: {
                  body: input.value,
                  postID,
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
    }
    return null
  }

  const editDelete = () => {
    if (commentCreatedBy === userID) {
      return (
        <>
          <EditComment
            onEdit={{ showComment, setShowComment }}
            refetch={refetch}
            commentID={comment.id}
            postID={postID}
            comment={comment.body}
          />
          <DeleteComment
            commentID={comment.id}
            postID={postID}
            refetch={refetch}
          />
        </>
      )
    }
    return null
  }

  const hasBeenEdited = (created, updated) => {
    if (created !== updated) {
      return `edited ${timeDifferenceForDate(updated)}`
    }
    return timeDifferenceForDate(created)
  }

  return (
    <Box mx={[2, 3, 4]} my={[2, 3, 4]}>
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
            ref={(node) => {
              input = node
            }}
            type="text"
            defaultValue={comment.body}
            style={{ marginTop: `${10}px` }}
          />
        </CommentBody>
      )}

      <CommentFooter>
        {!showComment ? saveCancel() : null}
        {showComment ? editDelete() : null}
      </CommentFooter>
    </Box>
  )
}

export default CommentComponent
