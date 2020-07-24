import styled from 'styled-components'
import { space, layout } from 'styled-system'

const Box = styled('div')(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  space,
  layout
)

export default Box
