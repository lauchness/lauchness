import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import { StyledHeading } from "../components/Typography"

const StyledBanner = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledBanner>
      <Image />
      <StyledHeading>
        Howdy folks, I'm Lauchlan Chisholm. This is my personal web app and
        blog, I'll be using it to experiment with and write about fun stuff.
        Enjoy!
      </StyledHeading>
    </StyledBanner>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
