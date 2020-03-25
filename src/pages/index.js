import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import { StyledHeading } from "../components/Typography"
import Card from "../components/Card"
import { mediaQuery } from "../utilities/style"

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

  ${mediaQuery()["medium"]} {
    flex-direction: row-reverse;

    & ${StyledHeading} {
      padding-right: 2rem;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledBanner>
      <Image />
      <StyledHeading>
        Hello, I'm Lauchlan Chisholm. <br />
        I'm a programmer and musician, and I hope to use this site to write
        about lots of fun stuff. Enjoy!
      </StyledHeading>
    </StyledBanner>
    <Card
      title="test casrd"
      copy="lorem ipsum sd;lfajsd;lfadsfjl;asdjfl;ajsdkl;fjadls;fj;ladskjf;laskdfjl;askdjf"
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
