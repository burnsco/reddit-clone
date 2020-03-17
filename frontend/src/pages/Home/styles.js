import styled from '@xstyled/styled-components'

export const HomeContainer = styled.div`
  display: flex;
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
