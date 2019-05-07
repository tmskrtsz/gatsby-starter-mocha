import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/SEO'

import { Flex, Box } from '@rebass/grid'
import { Container, Wrapper } from '../components/mocha/Grid'
import Fold from '../components/mocha/Fold'
import Header from '../components/mocha/Header'
import Content from '../components/mocha/Content'
import Button from '../components/mocha/Buttons'
import hero from '../images/hero.svg'

const LinksContainer = styled.div`
  a {
    text-decoration: none;
  }

  ${ Box } {
    margin-left: -1px;
  }
`

const Image = styled.div`
  width: 100%;
  height: 280px;
  background-color: ${ props => props.bgColor };
`

const imageColors = ['#ffcccc', '#fee3da', '#fff4f0', '#f8e1d0', '#ccbaa9', '#bacba9']

const Article = styled.article`
  border: 1px solid ${ props => props.theme.brand.dark };
  text-align: center;

  :hover {
    background-color: ${ props => props.theme.brand.secondary };
    border-color: transparent;

    h5 {
      border-color: transparent;

      small {
        color: white;
        opacity: 1;
      }
    }

    ${ Image } {
      background-color: ${ props => props.theme.brand.secondary };
    }
  }

  h5 {
    line-height: 1.4;
    border-top: 1px solid ${ props => props.theme.brand.dark };
    color: ${ props => props.theme.brand.dark };
    font-weight: normal;
    padding: 0.8em;

    small {
      font-family: 'Consolas', sans-serif;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      opacity: 0.7;
    }
  }
`

export default () => {
  const {
    allMdx: { edges: pages },
  } = useStaticQuery(mdxPages)

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
                      margin-bottom: 0.8em;
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
      <Container>
        <Flex py={5}>
          <Box>
            <h3>Blog Posts</h3>
          </Box>
        </Flex>
        <LinksContainer>
          <Flex>
            {pages.map((link, idx) => (
              <Box
                key={idx}
                width={1 / 3}
              >
                <Link to={link.node.fields.slug}>
                  <Article>
                    <div
                      css={`
                        margin: 1.7em;
                      `}
                    >
                      <Image bgColor={imageColors[Math.floor(Math.random() * imageColors.length)]} />
                    </div>
                    <h5>
                      <small>{link.node.frontmatter.date}</small>
                      <br />
                      {link.node.frontmatter.title}
                    </h5>
                  </Article>
                </Link>
              </Box>
            ))}
          </Flex>
        </LinksContainer>
      </Container>
    </>
  )
}

export const mdxPages = graphql`
  query {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
