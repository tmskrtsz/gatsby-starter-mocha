import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import SEO from '../components/SEO'
import Layout from './layout'
import { Container } from '../components/mocha/Grid'

const Page = ({ data: { mdx } }) => {
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <Container>
        <h1>{mdx.frontmatter.title}</h1>
        <small>{mdx.frontmatter.date}</small>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Container>
    </>
  )
}

export default Page

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
