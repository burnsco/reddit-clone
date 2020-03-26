import styled from '@xstyled/styled-components'
import NavLink from '../../components/shared/NavLink'

export const ChatPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  /* border: 1px solid #ebedf0; */
  background: #ffffff;
  -webkit-box-shadow: 1px 2px 4px -2px rgba(0, 0, 0, 0.5),
    1px 7px 7px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 4px -2px rgba(0, 0, 0, 0.5),
    1px 3px 7px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5rpx;
  width: 100%;
  height: 700rpx;
`
export const ChatRoomsListContainer = styled.div`
  border: 2px solid purple;
  min-height: 100%;
  width: 10%;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ebedf0;
`
export const ListOfChatRooms = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
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
export const ChatDisplay = styled.div`
  min-height: 100%;
  min-width: 80%;
`
export const ChatUserList = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid #ebedf0;
  width: 10%;
`
export const ChatInputFooter = styled.div``
