import styled, { css } from '@xstyled/styled-components'
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

const blueButton = css`
  color: white;
  background-color: #3661ed;
  border: 1px solid white;
  &:hover {
    background-color: #8ca2ea;
  }
`

const redButton = css`
  color: white;
  background-color: #e8171a;
  border: 1px solid white;
  &:hover {
    background-color: #aa191c;
  }
`

const getButtonStyles = ({ isRed, isBlue }) => {
  if (isRed) return redButton
  if (isBlue) return blueButton
}

export const TopControlButtons = styled(Link)`
  flex-grow: 1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${getButtonStyles}
`
