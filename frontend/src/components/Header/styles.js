import styled from 'styled-components'
import { UserNinja } from '@styled-icons/fa-solid'
import { CustomButton } from '../shared/CustomButton'

export const UserIcon = styled(UserNinja)`
  height: 20px;
  width: 30px;
`
export const HeaderContainer = styled.header`
  overflow: hidden;
  position: sticky;
  z-index: 10;
  top: 0;
  align-items: center;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #ebedf0;
  height: 48px;
  background-color: #ffffff;

  @media (max-width: 425px) {
    margin-bottom: 20px;
    height: 40px;
  }
`
export const HeaderNavWrapper = styled.nav`
  padding: 0 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const HeaderLogo = styled.div`
  flex-grow: 1;
`

export const HeaderLinks = styled.div`
  display: flex;
  align-items: space-evenly;
`
export const HeaderLink = styled.div`
  padding: 10px;
  margin: 5px;
  border: 1px solid #33a0ff;
  border-radius: 5px;
  &:hover {
    -webkit-box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.37);
    box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.37);
  }
`

export const HeaderButton = styled(CustomButton)``
