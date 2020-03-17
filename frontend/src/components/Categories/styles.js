import styled from '@xstyled/styled-components'
import NavLink from '../shared/NavLink'
import { Link } from '@reach/router'

export const CategoriesContainer = styled.aside`
  display: flex;
  margin-left: 20rpx;
  flex-direction: column;
  border-radius: 5rpx;
  border: 1px solid #ebedf0;
  background: #ffffff;
`

export const CategoryLinksContainer = styled.div`
  padding: 10rpx;
  display: flex;
  flex-direction: column;
`

export const ContainerHeader = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rpx;
  background-color: #bb5454;
  color: white;
  border: none;
  height: 30rpx;
  &:hover {
    background-color: #f3f5f3;
  }
`

export const CategoryLink = styled(NavLink)`
  margin-top: 10rpx;
`
