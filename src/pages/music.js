import React from "react"
import Markdown from "react-markdown"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Content from "../components/Content"
import Card from "../components/Card"
import { PageHeading } from "../components/Typography"
import { GridContainer } from "../components/Layout/Layout.styled"

const Development = ({ data: { musicBlog } }) => {
  return (
    <Layout>
      <SEO title="Lauchness | Music Blog" />
      <Content maxWidth={1200}>
        <PageHeading>Music Articles</PageHeading>
        <GridContainer>
          {musicBlog.edges.map(
            ({
              node: {
                id,
                fields: { title, slug, banner, description },
              },
            }) => (
              <Card key={id} title={title} asLink={slug} banner={banner}>
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
  query allMusic {
    musicBlog: allMdx(
      filter: { fileAbsolutePath: { regex: "//content/music//" } }
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
