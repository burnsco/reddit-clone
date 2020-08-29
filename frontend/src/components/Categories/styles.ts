import styled from '@emotion/styled'
import { Link } from '@reach/router'

export const PostAndCatButtons = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #3661ed;
  color: white;
  height: 30px;

  &:hover {
    background-color: #8ca2ea;
  }
`
