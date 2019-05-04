import { css, createGlobalStyle } from 'styled-components'

import theme from './index'

function setHeadingSize () {
  let headings = ''
  const sizes = theme.text.headingSizes

  for (let i = 1; i <= 6; i++) {
    headings += `
      h${ i } {
        font-size: ${ sizes[i - 1] };
        font-weight: 700;
      }
    `
  }
  return css`
    ${ headings }
  `
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${ props => props.theme.text.fontFamily };
    font-size: ${ props => props.theme.text.baseSize };
    line-height: 1.745;
  }

  ${ setHeadingSize() }

  img {
    max-width: 100%;
    height: auto;
  }
`

export default GlobalStyle
