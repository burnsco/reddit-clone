import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  margin-bottom: 2em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #ebedf0;
  height: 48rpx;
  background-color: #ffffff;

  @media (max-width: 425rpx) {
    margin-bottom: 2em;
    height: 40px;
  }
`
export const Wrapper = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
