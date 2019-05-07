import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { Wrapper, Container } from './Grid'

const Footer = () => {
  return (
    <Wrapper bgColor="#1c1c1c">
      <Flex
        py={3}
        mt={5}
      >
        <Container>
          <footer
            css={`
              width: 100%;
            `}
          >
            <h3>Footer</h3>
          </footer>
        </Container>
      </Flex>
    </Wrapper>
  )
}

export default Footer
