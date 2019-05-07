import React from 'react'
import SEO from '../components/SEO'

import { Flex, Box } from '@rebass/grid'
import { Container, Wrapper } from '../components/mocha/Grid'
import Fold from '../components/mocha/Fold'
import Header from '../components/mocha/Header'
import Content from '../components/mocha/Content'
import Button from '../components/mocha/Buttons'
import hero from '../images/hero.svg'

export default () => {
  return (
    <>
      <SEO title="Home" />
      <Wrapper bgColor="papayawhip">
        <Container>
          <Header />
          <Fold>
            <Flex
              alignItems="center"
              py="5"
            >
              <Box width={1 / 2}>
                <Content>
                  <h1>Mocha theme</h1>
                  <p
                    css={`
                      margin-bottom: 0.5em;
                    `}
                  >
                    Mocha is a Gatsby theme. Eu quam a semper lectus urna montes vestibulum vel.
                  </p>
                  <Button
                    as="a"
                    href="https://www.github.com/tmskrtsz/gatsby-starter-mocha"
                  >
                    Get it now
                  </Button>
                </Content>
              </Box>
              <Box width={1 / 2}>
                <img
                  src={hero}
                  alt="Hero image"
                />
              </Box>
            </Flex>
          </Fold>
        </Container>
      </Wrapper>
    </>
  )
}
