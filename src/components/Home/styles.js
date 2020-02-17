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
  display: flex;
  flex-direction: column;
`

export const SidebarContainer = styled.aside`
  width: 30%;
  margin: 1rem;
  background: #ffffff;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`
