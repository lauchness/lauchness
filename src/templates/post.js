import React, { useEffect } from "react"
import Markdown from "react-markdown"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Content from "../components/Content"
import Image from "../components/Image"
import { PageHeading } from "../components/Typography"

export default function Post({ data: { mdx } }) {
  const {
    fields: { title, banner, bannerCredit, description },
  } = mdx

  useEffect(async () => {
    if (window) {
      const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")

      await deckdeckgoHighlightCodeLoader.defineCustomElements(window)
    }
  }, [])

  return (
    <Layout>
      <SEO title={title} />
      <article>
        <Content>
          <PageHeading>{title}</PageHeading>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              childImageSharp={banner.childImageSharp}
              alt={bannerCredit}
            />
            {bannerCredit && <Markdown>{bannerCredit}</Markdown>}
          </div>
          {description && <Markdown>{description}</Markdown>}
          <hr />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Content>
      </article>
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
