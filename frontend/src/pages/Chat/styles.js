import styled from '@xstyled/styled-components'
import NavLink from '../../components/shared/NavLink'

export const ChatPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #ebedf0;
  background: #ffffff;
  -webkit-box-shadow: 1px 7px 14px -2px rgba(0, 0, 0, 0.5),
    1px 7px 14px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 7px 14px -2px rgba(0, 0, 0, 0.5),
    1px 7px 14px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5rpx;
  width: 100%;
  height: 700rpx;
`
export const ChatRoomsList = styled.div`
  width: 150rpx;
  padding: 10rpx;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ebedf0;
  height: 100%;
`

export const ChatRoomLink = styled(NavLink)`
  margin-top: 15rpx;
`

export const ChatDisplay = styled.div``
export const ChatUserList = styled.div``
export const ChatInputFooter = styled.div``
