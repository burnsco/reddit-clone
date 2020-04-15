import styled from '@xstyled/styled-components'
import NavLink from '../shared/NavLink'
import { Link } from '@reach/router'

export const CategoriesContainer = styled.aside`
  display: flex;
  margin-left: 20rpx;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
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
  margin-bottom: 5rpx;
  justify-content: center;
  background-color: #3661ed;
  color: white;
  border: none;
  height: 30rpx;
  &:hover {
    background-color: #8ca2ea;
  }
`

export const CategoryLink = styled(NavLink)`
  margin-top: 10rpx;
`
