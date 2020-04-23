import React, { useState } from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Image from "../components/Image"
import SEO from "../components/seo"
import { StyledHeading } from "../components/Typography"
import Card from "../components/Card"
import Button from "../components/Button"
import FlyingLauchstar from "../components/FlyingLauchstar"
import SwimmingMonster from "../components/SwimmingMonster"
import { mediaQuery } from "../utilities/style"
import Content from "../components/Content"

export const StyledDiv = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.units.getGutter()};

  ${mediaQuery()["medium"]} {
    display: grid;
    grid-template:
      "a a"
      "b c" 1fr / 50%;
  }

  & svg {
    display: flex;
    width: 5rem;
  }
`

let clickIndex = 0

const IndexPage = () => {
  const [showAnimation, setShowAnimation] = useState(null)

  const showAnimationHandler = () => {
    if (clickIndex++ % 2 === 0) {
      setShowAnimation("lauchstar")
      setTimeout(() => {
        setShowAnimation(null)
      }, 3000)
    } else {
      setShowAnimation("swimming-monster")
      setTimeout(() => {
        setShowAnimation(null)
      }, 5000)
    }
  }

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
      <SEO title="Home" />
      <Banner>
        <Image
          round={true}
          childImageSharp={lauchieFace.childImageSharp}
          maxWidth={300}
        />
        <StyledHeading>
          Hello, I'm Lauchlan Chisholm. <br />
          I'm a programmer and musician, and I've built this web app to learn
          and write about lots of fun stuff. Enjoy!
          <Button
            onClick={() => {
              if (!showAnimation) {
                showAnimationHandler()
              }
            }}
            type="button"
            disabled={!!showAnimation}
          >
            Click Me
          </Button>
          {showAnimation &&
            (showAnimation === "lauchstar" ? (
              <FlyingLauchstar />
            ) : (
              <SwimmingMonster />
            ))}
        </StyledHeading>
      </Banner>
      <Content>
        <StyledDiv>
          <Card title="Development" gridArea="a" asLink="/development">
            <p>
              I'm a professional web developer who spends most of my work hours
              on front end technologies in the React ecosystem.
            </p>
            <p>
              However, I like to label myself as a full-stack developer and will
              also be writing about and experimenting with Database Systems, and
              Infrastructure as Code!
            </p>
          </Card>
          <Card title="Music" gridArea="b" asLink="/music">
            <p>
              I'm a listener, improviser, composer, and performer interested in
              many styles of music.
            </p>
            <p>
              I plan to use this as a platform to share musical ideas, and
              develop tools that musicians of all levels will find useful!
            </p>
          </Card>
          <Card title="Fun and Education 🎉" gridArea="c">
            <p>
              I firmly believe learning can be one of the most enjoyable things
              we do.
            </p>
            <p>
              In time I hope to make all kinds of free content that engages and
              educates people in the topics I love.
            </p>
          </Card>
        </StyledDiv>
      </Content>
    </Layout>
  )
}

export default IndexPage
