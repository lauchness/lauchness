import React from "react"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import get from "lodash/get"

import Layout from "../components/Layout"
import SEO from "../components/seo/seo"
import Content from "../components/Content"
import Image from "../components/Image"
import { PageHeading } from "../components/Typography"

class Post extends React.Component {
  async componentDidMount() {
    try {
      const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")

      await deckdeckgoHighlightCodeLoader.defineCustomElements(window)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const {
      data: { mdx },
    } = this.props
    const {
      fields: { title, banner, bannerCredit, description },
    } = mdx

    return (
      <Layout>
        <SEO
          frontmatter={mdx.fields}
          metaImage={get(mdx, "fields.banner.childImageSharp.fluid.src")}
          isBlogPost
        />
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

export default Post
