import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import GlobalStyles from '../theme/global'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

export default Layout
