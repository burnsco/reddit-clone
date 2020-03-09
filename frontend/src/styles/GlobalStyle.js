import { createGlobalStyle } from '@xstyled/styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

a {
  text-decoration: none;
}

body {
  background: bg;
  color: text;
  min-height: 100%;
  padding-bottom: 48rpx;
  font-family: 'Open Sans', sans-serif;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`
