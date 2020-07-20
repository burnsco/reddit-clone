import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import { render } from 'react-dom'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/GlobalStyle'
import { RedditApp } from './Apollo'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RedditApp />
  </ThemeProvider>
)

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
