import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Page = () => {
  const data = useStaticQuery(pageQuery)
  console.log(data)
  return <h1>Hey</h1>
}

export default Page

const pageQuery = graphql`
  query($path: String!) {
    mdx(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        date
      }
    }
  }
`
