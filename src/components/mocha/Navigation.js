import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  a {
    font-size: 1.8rem;
    text-decoration: none;
    margin: 2em;
    color: black;
    font-weight: 700;

    :hover {
      color: ${ props => props.theme.brand.secondary };
    }
  }
`

const Navigation = () => {
  const {
    site: {
      siteMetadata: { navigation },
    },
  } = useStaticQuery(navQuery)

  return (
    <Nav>
      {navigation.map((link, idx) => {
        if (link.type) {
          return (
            <a
              key={idx}
              href={link.path}
              target="_blank"
            >
              {link.name}
            </a>
          )
        }

        return (
          <Link
            key={idx}
            to={link.path}
          >
            {link.name}
          </Link>
        )
      })}
    </Nav>
  )
}

const navQuery = graphql`
  query {
    site {
      siteMetadata {
        navigation {
          name
          path
          type
        }
      }
    }
  }
`

export default Navigation
