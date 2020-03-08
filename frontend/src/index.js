import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import RedditApp from './apollo.config'
import './index.css'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <RedditApp />
    </ColorModeProvider>
  </ThemeProvider>
)
render(<App />, document.getElementById('root'))
