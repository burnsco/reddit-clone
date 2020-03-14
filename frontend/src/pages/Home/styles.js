import styled from '@xstyled/styled-components'

export const HomeContainer = styled.div`
  display: flex;
  margin: 0 5vw;
  max-width: 90vw;
  background: #f4f6f8;
  justify-content: center;
`

export const FeedContainer = styled.section`
  min-height: 100%;
  width: 100%;
`

export const SidebarContainer = styled.aside`
  width: 180rpx;
  margin-left: 10rpx;
  background: #ffffff;
  @media (max-width: 768px) {
    display: none;
  }
`
