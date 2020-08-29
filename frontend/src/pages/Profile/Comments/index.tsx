import React from 'react'
import CommentComponent from '../../ViewPostPage/CommentsPage/Comment'
import { useUserCommentsQuery } from '../../../generated/graphql'
import { Skeleton } from '@chakra-ui/core'

type ProfileCommentsProps = {
  userID: string
}

const ProfileComments = (props: ProfileCommentsProps) => {
  const { userID } = props

  const { data, loading, error, refetch } = useUserCommentsQuery({
    variables: { userID }
  })

  if (error) return <div>Error! Contact Admin!</div>

  if (data?.comments.length === 0) return <div>Nothing to see here!</div>
  else {
    refetch()
    return (
      <Skeleton colorStart="pink" colorEnd="orange" isLoaded={!loading}>
        {data?.comments.map(comment => (
          <CommentComponent
            comment={comment}
            key={`userComment-${comment.id}`}
          />
        ))}
      </Skeleton>
    )
  }
}

export default ProfileComments
