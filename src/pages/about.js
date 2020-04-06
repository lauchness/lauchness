import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import { StyledHeading, PageHeading } from "../components/Typography"
import Card from "../components/Card"
import Banner from "../components/Banner"
import Content from "../components/Content"

const AboutPage = () => {
  const { lauchieFace } = useStaticQuery(graphql`
    query {
      lauchieFace: file(relativePath: { eq: "lauchie.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About Lauchlan Chisholm" />
      <Banner>
        <PageHeading>Lauchlan Chisholm</PageHeading>
        <Image
          childImageSharp={lauchieFace.childImageSharp}
          round={true}
          maxWidth={300}
        />
      </Banner>
      <Content>
        <StyledHeading>About Me</StyledHeading>
        <p>
          I'm a musician, and programmer who strives to enjoy his life, and
          spread that joy to others.
        </p>
        <p>I live with my wife, three sons, and dog in Nova Scotia, Canada.</p>

        <StyledHeading>Career &amp; Education</StyledHeading>
        <p>
          I keep my resume up to date on LinkedIn, if you are interested in
          reading more about my experience and education, please refer to my{" "}
          <a href="https://www.linkedin.com/in/lauchlanchisholm/">
            LinkedIn profile
          </a>
          .
        </p>
      </Content>
    </Layout>
  )
}

export default AboutPage
