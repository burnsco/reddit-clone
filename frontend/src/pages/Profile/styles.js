import styled from 'styled-components'
import NavLink from '../../components/shared/NavLink'

export const ProfileContainer = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  flex-direction: column;
  border: 1px solid #ebedf0;
  background: #ffffff;
`

export const ProfileNavigationHeader = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #ebedf0;
  justify-content: space-evenly;
`

export const ProfileNavigationLink = styled(NavLink)``

export const ProfileNavigationLinks = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #ebedf0;
`

export const ProfileSortingItems = styled.div``

export const ProfileFeedContainer = styled.div`
  display: flex;
  padding: 15px;
`

export const CommentsContainer = styled.div`
  border: 1px solid grey;
  padding: 10px;
  margin-top: 10px;
`

export const PostListContainer = styled.section`
  width: 100%;
`
