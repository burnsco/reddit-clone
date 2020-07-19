import styled from 'styled-components'
import { Link } from '@reach/router'

export const PostContainer = styled.div`
  background: #ffffff;
  display: flex;
  margin-bottom: 20px;
  border-radius: 5px;
  min-height: 100px;
  padding: 5px;
  width: 100%;
`
export const VoteBoxContainer = styled.div`
  display: flex;
`

export const PostDetailsContainer = styled.div`
  margin-top: 5px;
  min-height: 100px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const PostDetailsHeader = styled.div`
  font-size: 12px;
  display: flex;
  color: #ced1db;
`
export const PostCategory = styled.div`
  &:hover {
    text-decoration: underline;
  }
  font-weight: 700;
  color: black;
`

export const PostedBy = styled.div`
  margin-left: 10px;
  text-decoration: none;
`
export const UserName = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  color: #85898b;
`

export const PostTitle = styled.h2`
  margin-top: 10px;
  font-weight: 500;
`

export const PostText = styled.div`
  margin-top: 15px;
`

export const PostFooter = styled.div`
  margin-top: 20px;

  display: flex;
  width: 100%;
`

export const PostComments = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  color: grey;
  &:hover {
    background: #ebedf0;
  }
`

export const CommentHeader = styled.div`
  font-size: 12px;
  display: flex;
  color: #ced1db;
`

export const CommentsContainer = styled.div`
  margin-top: 20px;
  margin-left: 45px;
  margin-right: 45px;
  margin-bottom: 20px;
`
export const CommentAuthor = styled.div`
  margin-left: 15px;
`

export const CommentCreatedAt = styled.span`
  margin-left: 10px;
`

export const PostAndCommentsContainer = styled.section`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ffffff;

  background: #ffffff;
`

export const CommentBody = styled.div`
  margin-top: 10px;
`
