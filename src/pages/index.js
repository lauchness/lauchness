import React, { useState } from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import { StyledHeading } from "../components/Typography"
import Card from "../components/Card"
import Button from "../components/Button"
import FlyingLauchstar from "../components/FlyingLauchstar"
import { mediaQuery } from "../utilities/style"

const StyledBanner = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  background: ${props => props.theme.color.brand1};
  color: ${props => props.theme.color.white};

  ${mediaQuery()["medium"]} {
    flex-direction: row-reverse;

    & ${StyledHeading} {
      padding-right: 2rem;
    }
  }
`

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.units.gutter};

  ${mediaQuery()["medium"]} {
    display: grid;
    grid-template:
      "a a"
      "b c" 1fr / 50%;
  }
`

const IndexPage = () => {
  const [showLauchstar, setShowLauchstar] = useState(false)
  return (
    <Layout>
      <SEO title="Home" />
      {showLauchstar && <FlyingLauchstar />}
      <StyledBanner>
        <Image />
        <StyledHeading>
          Hello, I'm Lauchlan Chisholm. <br />
          I'm a programmer and musician, and I've built this web app to learn
          and write about lots of fun stuff. Enjoy!
        </StyledHeading>
      </StyledBanner>
      <Content>
        <Card title="Development" gridArea="a">
          <p>
            I'm a professional web developer who spends most of my work hours on
            front end technologies in the React ecosystem.
          </p>
          <p>
            However, I like to label myself as a full-stack developer and will
            also be writing about and experimenting with Database Systems, and
            Infrastructure as Code!
          </p>
          <br />
          <Button
            onClick={() => {
              if (!showLauchstar) {
                setShowLauchstar(true)
                setTimeout(() => {
                  setShowLauchstar(false)
                }, 3000)
              }
            }}
            type="button"
            disabled={showLauchstar}
          >
            Click Me
          </Button>
        </Card>
        <Card title="Music" gridArea="b" asLink="/">
          <p>
            I'm a listener, improviser, composer, and performer interested in
            many styles of music.
          </p>
          <p>
            I plan to use this as a platform to share musical ideas, and develop
            tools that musicians of all levels will find useful!
          </p>
        </Card>
        <Card title="Fun and Education 🎉" gridArea="c">
          <p>
            I firmly believe learning can be one of the most enjoyable things we
            do.
          </p>
          <p>
            In time I hope to make all kinds of free content that engages and
            educates people in the topics I love.
          </p>
        </Card>
      </Content>
    </Layout>
  )
}

export default IndexPage
