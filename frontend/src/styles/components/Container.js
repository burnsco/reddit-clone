import styled from 'styled-components'
import { space, layout } from 'styled-system'

const Container = styled('div')(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  space,
  layout
)

export default Container
