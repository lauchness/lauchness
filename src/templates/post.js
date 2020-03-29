import React from "react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

export default function Post({ data: { site, mdx } }) {
  return <MDXRenderer>{mdx.body}</MDXRenderer>
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
        date
        description
        author
        slug
        banner {
          ...bannerImage720
        }
        bannerCredit
        keywords
      }
      body
    }
  }
`
