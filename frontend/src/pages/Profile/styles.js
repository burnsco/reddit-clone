import styled from '@emotion/styled'
import NavLink from '../../components/shared/NavLink'

export const ProfileContainer = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 25rpx;
  flex-direction: column;
  border: 1px solid #ebedf0;
  background: #ffffff;
`

export const ProfileNavigationHeader = styled.div`
  display: flex;
  padding: 15rpx;
  border-bottom: 1px solid #ebedf0;
  justify-content: space-evenly;
`

export const ProfileNavigationLink = styled(NavLink)``

export const ProfileNavigationLinks = styled.div`
  padding: 15rpx;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #ebedf0;
`

export const ProfileSortingItems = styled.div``

export const ProfileFeedContainer = styled.div`
  display: flex;
  padding: 15rpx;
`

export const CommentsContainer = styled.div`
  border: 1px solid grey;
  padding: 10rpx;
  margin-top: 10rpx;
`

export const PostListContainer = styled.section`
  width: 100%;
`
