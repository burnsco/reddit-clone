import styled from 'styled-components'
import { Link } from '@reach/router'

import NavLink from '../shared/NavLink'
import Flex from '../../styles/components/Flex'

export const CategoriesContainer = styled.aside`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #ebedf0;
  background: #fff;
`
export const CategoryLinksContainer = styled(Flex)`
  flex-direction: column;
`
export const ContainerHeader = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #3661ed;
  color: white;
  height: 30px;

  &:hover {
    background-color: #8ca2ea;
  }
`
export const CategoryLink = styled(NavLink)`
  margin-top: 10px;
  &:hover {
    background: #ebedf0;
  }
`
