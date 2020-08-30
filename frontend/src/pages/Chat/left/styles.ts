import styled from '@emotion/styled'
import { Link } from '@reach/router'

export const ChatRoomsListContainer = styled.div`
  height: 100%;
  width: 140px;
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
export const ChatRoomLink = styled(Link)`
  margin-bottom: 2px;
  padding: 10px;
  font-size: 12px;

  &:hover {
    background: #ebedf0;
    border-right: 6px solid #459cff;
  }
`

export const ChatRoomNav = styled.div`
  display: flex;

  border-top: 2px solid #ebedf0;
`
export const ChatRoomNavIcon = styled.div`
  color: 'red';
`
