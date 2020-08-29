import { Box, Text } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import { CommentAlt } from '@styled-icons/fa-solid'

export const PostContainer = styled(Box)`
  border: 1px solid #ebedf0;
  background: #fff;
  border-radius: 5px;
  display: flex;
  margin-bottom: 20px;
  min-height: 100px;
  width: 100%;

  &:hover {
    border: 1px solid #ced1db;
  }
`
export const VoteBoxContainer = styled.div`
  margin-right: 5px;
`

export const CommentIcon = styled(CommentAlt)`
  color: grey;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`

export const PostDetailsContainer = styled.div`
  margin-top: 5px;
  min-height: 100px;
  padding-right: 5px;
  padding-left: 5px;
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

export const PostTitle = styled.h2`
  margin-top: 10px;
  font-weight: 500;
`

export const PostText = styled(Text)`
  margin-top: 15px;
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

export const PostFooter = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
`

export const PostComments = styled.div`
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  margin-bottom: 5px;
  color: grey;

  &:hover {
    background: #ebedf0;
  }
`

export const PostCategory = styled.div`
  &:hover {
    text-decoration: underline;
  }

  font-weight: 700;
  color: black;
`

export const PostAuthor = styled.div`
  margin-left: 15px;
`

export const PostDateCreated = styled.div`
  margin-left: 15px;
`
