import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import { StyledHeading } from "../components/Typography"
import Card from '../components/Card'

const StyledBanner = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  background: ${props => props.theme.color.purple};
  color: ${props => props.theme.color.white};

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
    <Card title="test casrd" copy="lorem ipsum sd;lfajsd;lfadsfjl;asdjfl;ajsdkl;fjadls;fj;ladskjf;laskdfjl;askdjf"  />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)


export default IndexPage
