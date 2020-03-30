import React from "react"
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

const Development = ({ data: { devBlog } }) => {
  console.log(devBlog)
  return (
    <Layout>
      <SEO title="Page two" />
      <Content>
        <StyledHeader>Development Blog</StyledHeader>
        <GridContainer>
          {devBlog.edges.map(
            ({
              node: {
                id,
                excerpt,
                fields: { title, slug, banner },
              },
            }) => (
              <Card key={id} title={title} asLink={slug} banner={banner}>
                {excerpt}
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
    excerpt(pruneLength: 250)
    fields {
      title
      slug
      banner {
        ...bannerImage260
      }
    }
  }
  query all {
    devBlog: allMdx(
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
