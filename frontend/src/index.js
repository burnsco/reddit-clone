import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import RedditApp from './apollo'
import theme from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

const App = () => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <GlobalStyle />
      <RedditApp />
    </ColorModeProvider>
  </ThemeProvider>
)
render(<App />, document.getElementById('root'))
