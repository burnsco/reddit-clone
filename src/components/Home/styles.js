import styled from '@xstyled/styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  background: #f4f6f8;
  justify-content: center;
`

export const FeedContainer = styled.section`
  margin: 1rem;
  width: 100%;
`

export const SidebarContainer = styled.aside`
  width: 180rpx;
  height: 500rpx;
  margin: 1rem;
  background: #ffffff;
  @media (max-width: 768px) {
    display: none;
  }
`
