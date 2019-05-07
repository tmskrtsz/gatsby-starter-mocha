import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Flex, Box } from '@rebass/grid'
import Navigation from './Navigation'
import logo from '../../images/logo.png'

const Header = styled.header`
  padding: 2em 0;
`

const Logo = styled.div`
  background-image: url(${ logo });
  background-repeat: no-repeat;
  background-size: cover;
  width: 84px;
  height: 84px;
`

export default () => (
  <Header>
    <Flex alignItems="center">
      <Box width={1 / 2}>
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <Box width={1 / 2}>
        <Navigation />
      </Box>
    </Flex>
  </Header>
)
