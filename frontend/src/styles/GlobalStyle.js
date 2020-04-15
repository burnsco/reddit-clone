import { createGlobalStyle } from '@xstyled/styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
${normalize}
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

html {
  min-height: 100%;
  height: 100%;
  background: #f4f6f8;
}

body {
  min-height: 100%;
  height: 100%;
  text-rendering: optimizeSpeed;
  padding-bottom: 25rpx;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`
