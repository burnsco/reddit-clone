import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import { render } from 'react-dom'

import { ThemeProvider } from 'emotion-theming'
import { RedditApp } from './Apollo'

import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <RedditApp />
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
