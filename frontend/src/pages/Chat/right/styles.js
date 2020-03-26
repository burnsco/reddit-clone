import styled from '@xstyled/styled-components'
import { UserAstronaut } from '@styled-icons/fa-solid'
import { UserGraduate } from '@styled-icons/fa-solid'

export const ChatUserListContainer = styled.div`
  display: flex;
  width: 150rpx;
  flex-direction: column;
  border-left: 2px solid #ebedf0;
`
export const UserIcon = styled(UserAstronaut)`
  height: 20rpx;
  width: 20rpx;
`
export const UserIconTwo = styled(UserGraduate)`
  height: 20rpx;
  width: 20rpx;
`
