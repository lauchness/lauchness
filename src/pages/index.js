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
      "a a a"
      "b c d" 1fr / 33%;
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
            I was introduced to programming during my post-secondary education
            in a Numerical Analysis course, but there were a few detours before
            I'd end up in my current career as a developer.
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
        <Card title="test card" gridArea="b">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis nihil minus sed dignissimos sapiente voluptatem vel
            modi, nam nemo perferendis quidem voluptate doloribus debitis
            dolorum adipisci numquam, porro, aliquid amet?
          </p>
        </Card>
        <Card title="another one" gridArea="c">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis nihil minus sed dignissimos sapiente voluptatem vel
            modi, nam nemo perferendis quidem voluptate doloribus debitis
            dolorum adipisci numquam, porro, aliquid amet?
          </p>
        </Card>
        <Card title="another one" gridArea="d">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis nihil minus sed dignissimos sapiente voluptatem vel
            modi, nam nemo perferendis quidem voluptate doloribus debitis
            dolorum adipisci numquam, porro, aliquid amet?
          </p>
        </Card>
      </Content>
    </Layout>
  )
}

export default IndexPage
