import React from "react"
import Markdown from "react-markdown"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Content from "../components/Content"
import Card from "../components/Card"
import { PageHeading } from "../components/Typography"
import { GridContainer } from "../components/Layout/Layout.styled"

const Development = ({ data: { devBlog } }) => {
  return (
    <Layout>
      <SEO title="Lauchness | Development Blog" />
      <Content maxWidth={1200}>
        <PageHeading>Development Blog</PageHeading>
        <GridContainer>
          {devBlog.edges.map(
            ({
              node: {
                id,
                fields: { title, slug, banner, description, tags },
              },
            }) => (
              <Card
                key={id}
                title={title}
                asLink={slug}
                banner={banner}
                tags={tags}
              >
                {description && <Markdown>{description}</Markdown>}
              </Card>
            )
          )}
        </GridContainer>
      </Content>
    </Layout>
  )
}

export default Development

export const pageQuery = graphql`
  query all {
    devBlog: allMdx(
      filter: { fileAbsolutePath: { regex: "//content/blog//" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 24
    ) {
      edges {
        node {
          ...PostsDetails
        }
      }
    }
  }
`
