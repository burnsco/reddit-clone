import styled from '@emotion/styled'
import { Link } from '@reach/router'

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
  border: '1px solid grey';
`

export const TopControlButtonPost = styled(Link)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
  cursor: pointer;
  color: white;
  background-color: #3661ed;
  border: 1px solid white;

  &:hover {
    background-color: #8ca2ea;
  }
`
export const TopControlButtonCategory = styled(Link)`
  flex-grow: 1;
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
