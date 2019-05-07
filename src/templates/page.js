import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './layout'
import { Container } from '../components/mocha/Grid'

const Page = ({ data: { mdx } }) => {
  console.log(mdx)
  return (
    <Layout>
      <Container>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Container>
    </Layout>
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
