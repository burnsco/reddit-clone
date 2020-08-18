import styled from 'styled-components'
import NavLink from '../../components/shared/NavLink'

export const ProfileContainer = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  flex-direction: column;
  border: 1px solid #ebedf0;
  background: #fff;
`

export const ProfileNavigationHeader = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #ebedf0;
  justify-content: space-evenly;
`

export const ProfileNavigationLinks = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #ebedf0;
`

export const ProfileNavigationLink = styled(NavLink)`
  font-weight: 500;
`

export const ProfileFeedContainer = styled.div`
  padding: 15px;
`

export const CommentsContainer = styled.div`
  border: 1px solid grey;
  padding: 5px;
  margin-top: 10px;
`

export const PostListContainer = styled.section`
  min-width: 100%;
`
