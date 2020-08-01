import styled from 'styled-components'
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
  width: 180px;
  margin-left: 10px;

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

export const TopControlSelect = styled(Select)`
  border: '2px solid grey';
`

export const TopControlButtonPost = styled(Link)`
  flex-grow: 1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
  cursor: pointer;
  color: white;
  background-color: #e8171a;
  border: 1px solid white;

  &:hover {
    background-color: #aa191c;
  }
`
export const TopControlButtonCategory = styled(Link)`
  flex-grow: 1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
  color: white;
  background-color: #3661ed;
  border: 1px solid white;

  &:hover {
    background-color: #8ca2ea;
  }
`
