import React from 'react'
import { render } from 'react-dom'

import RedditApp from './apollo.config'

import './index.css'

const rootElement = document.getElementById('root')

const App = () => <RedditApp />

render(<App />, rootElement)
