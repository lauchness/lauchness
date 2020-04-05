import React from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../components/Image"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const StyledDiv = styled.div`
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const spin = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`

const RotatingDiv = styled.div`
  height: 300px;
  width: 300px;
  animation: ${spin} 3s linear infinite;
`

const NotFoundPage = () => {
  const { pokeLauchness } = useStaticQuery(graphql`
    query {
      pokeLauchness: file(relativePath: { eq: "poke-lauchness.png" }) {
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
      <SEO title="404: Not found" />
      <StyledDiv>
        <h1>NOT FOUND</h1>
        <RotatingDiv>
          <Image
            childImageSharp={pokeLauchness.childImageSharp}
            maxWidth={300}
          />
        </RotatingDiv>
        <p>You just hit a route that doesn&#39;t exist... yet.</p>
      </StyledDiv>
    </Layout>
  )
}

export default NotFoundPage
