import React from 'react'
import { render } from 'react-dom'

import { ThemeProvider } from '@xstyled/styled-components'
import RedditApp from './apollo.config'
import './index.css'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <RedditApp />
  </ThemeProvider>
)
render(<App />, document.getElementById('root'))
