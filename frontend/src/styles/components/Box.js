import styled from 'styled-components'
import { space, layout, typography, color, border } from 'styled-system'

const Box = styled('div')(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  space,
  typography,
  color,
  border,
  layout
)

export default Box
