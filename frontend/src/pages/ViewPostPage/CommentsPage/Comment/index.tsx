import React, { useState } from 'react'
import {
  CommentHeader,
  UserName,
  CommentCreatedAt,
  CommentBody
} from '../../styles'
import EditComment from '../EditComment'
import DeleteComment from '../DeleteComment'
import { timeDifferenceForDate } from '../../../../utils/timeDifferenceForDate'
import { Box } from '@chakra-ui/core'
import {
  useCurrentUserQuery,
  UserCommentsQuery,
  useUpdateCommentMutation
} from '../../../../generated/graphql'
import { ApolloQueryResult } from '@apollo/client'

type CommentProps = {
  postID: string
  refetch: () => Promise<ApolloQueryResult<UserCommentsQuery>>
  comment: {
    id: string
    body: string
    createdAt: string
    updatedAt: string
    createdBy: {
      id: string
      username: string
    }
  }
}

const CommentComponent = ({ postID, refetch, comment }: CommentProps) => {
  const { data } = useCurrentUserQuery()
  const [editComment, { loading, error }] = useUpdateCommentMutation()
  const [showComment, setShowComment] = useState(true)

  if (loading) return null
  if (error) return <div>error!</div>

  let input: any

  const commentCreatedBy = comment?.createdBy.id

  const userID = data?.currentUser.id

  const saveCancel = () => {
    if (commentCreatedBy === userID) {
      return (
        <>
          <Box
            ml="2"
            as="button"
            onClick={() => {
              editComment({
                variables: {
                  body: input.value,
                  postID,
                  commentID: comment.id
                }
              })
              refetch()
            }}
          >
            Save
          </Box>
          <Box ml="2" as="button" onClick={() => setShowComment(!showComment)}>
            Cancel
          </Box>
        </>
      )
    }
    return null
  }

  const editDelete = () => {
    if (commentCreatedBy === userID) {
      return (
        <>
          <EditComment onEdit={{ showComment, setShowComment }} />
          <DeleteComment commentID={comment.id} postID={postID} />
        </>
      )
    }
    return null
  }

  const hasBeenEdited = (created: string, updated: string) => {
    if (created !== updated) {
      return `edited ${timeDifferenceForDate(updated)}`
    }
    return timeDifferenceForDate(created)
  }

  return (
    <Box mx={[2, 3, 4]} my={[2, 3, 4]}>
      <CommentHeader>
        <UserName to={`../../profile/${commentCreatedBy}`}>
          {' '}
          <strong>{comment.createdBy.username}</strong>
        </UserName>
        <CommentCreatedAt>
          {hasBeenEdited(comment.createdAt, comment.updatedAt)}

          {!showComment ? saveCancel() : null}
          {showComment ? editDelete() : null}
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
            style={{ marginTop: `${10}px` }}
          />
        </CommentBody>
      )}
    </Box>
  )
}

export default CommentComponent
