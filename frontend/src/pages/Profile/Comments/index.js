import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER_COMMENTS_QUERY } from './query'
import CommentComponent from '../../ViewPostPage/CommentsPage/Comment'
import MainSpinner from '../../../components/shared/FallBackSpinner'

const ProfileComments = () => {
  const { data, loading, error } = useQuery(GET_USER_COMMENTS_QUERY)

  if (loading) return <MainSpinner />
  if (error) return <div>Error! Contact Admin!</div>

  return (
    <>
      {data.comments.map((comment) => (
        <CommentComponent comment={comment} key={`userComment-${comment.id}`} />
      ))}
    </>
  )
}

export default ProfileComments
