import React from 'react'
import { render } from 'react-dom'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { RedditApp } from './Apollo'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <RedditApp />
  </ThemeProvider>
)

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
