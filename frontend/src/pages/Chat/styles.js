import styled from 'styled-components'
import Flex from '../../styles/components/Flex'

export const Container = styled(Flex)`
  min-height: 100%;
  width: 100%;
  flex-direction: row;
  border: 1px solid #ebedf0;
  background: #ffffff;
  -webkit-box-shadow: 1px 2px 4px -2px rgba(0, 0, 0, 0.5),
    1px 7px 7px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 4px -2px rgba(0, 0, 0, 0.5),
    1px 3px 7px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  height: 500px;
`
