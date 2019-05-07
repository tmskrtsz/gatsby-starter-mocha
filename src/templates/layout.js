import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import GlobalStyles from '../theme/global'
import Footer from '../components/mocha/Footer'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

export default Layout
