import React from "react"
import Markdown from "react-markdown"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Content from "../components/Content"
import Card from "../components/Card"
import { mediaQuery } from "../utilities/style"

const StyledHeader = styled.h1`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
`

const GridContainer = styled.div`
  display: grid;
  ${mediaQuery()["medium"]} {
    grid-template-columns: repeat(3, 33%);
  }
`

const Development = ({ data: { musicBlog } }) => {
  return (
    <Layout>
      <SEO title="Music Blog" />
      <Content maxWidth={1200}>
        <StyledHeader>Music Articles</StyledHeader>
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
  fragment PostsDetails on Mdx {
    id
    fields {
      title
      description
      slug
      banner {
        ...bannerImage260
      }
    }
  }
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
