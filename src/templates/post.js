import React, { useEffect } from "react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Content from "../components/Content"

export default function Post({ data: { mdx } }) {
  const { fields } = mdx

  useEffect(async () => {
    if(window) {
      const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
    
      await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
    }
    
  }, [])

  return (
    <Layout>
      <SEO title={fields.title} />
      <Content>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Content>
    </Layout>
  )
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
