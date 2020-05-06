import styled from '@xstyled/styled-components'
import { Link } from '@reach/router'
import Select from 'react-select'

export const HomeContainer = styled.div`
  display: flex;
  min-width: 100%;
`

export const FeedContainer = styled.section`
  min-height: 100%;
  width: 100%;
`

export const SidebarContainer = styled.aside`
  width: 160rpx;
  margin-left: 10rpx;

  @media (max-width: 768px) {
    display: none;
  }
`

export const TopControls = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const TopControlSelectContainer = styled.div`
  flex-grow: 2;
`
export const TopControlSelect = styled(Select)``

export const TopControlButtons = styled(Link)`
  border: 1px solid white;
  flex-grow: 1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3661ed;
  color: white;
  border: none;
  &:hover {
    background-color: #8ca2ea;
  }
`
