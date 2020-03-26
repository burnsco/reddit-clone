import styled from '@xstyled/styled-components'
import NavLink from '../../../components/shared/NavLink'

export const ChatRoomsListContainer = styled.div`
  height: 100%;
  width: 140rpx;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ebedf0;
`
export const ListOfChatRoomsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;
`
export const ChatRoomLink = styled(NavLink)`
  margin-bottom: 2px;
  padding: 10rpx;
  font-size: 12rpx;

  &:hover {
    background: #ebedf0;
    border-right: 6px solid #459cff;
  }
`
