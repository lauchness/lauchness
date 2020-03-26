import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import { StyledHeading } from "../components/Typography"
import Card from "../components/Card"
import Button from "../components/Button"
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

  ${mediaQuery()["medium"]} {
    display: grid;
    grid-template:
      "a a a" 1fr
      "b c d" 1fr
      "b c d" 1fr;
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
    <Content>
      <Card title="test card" gridArea="a">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        nihil minus sed dignissimos sapiente voluptatem vel modi, nam nemo
        perferendis quidem voluptate doloribus debitis dolorum adipisci numquam,
        porro, aliquid amet?
        <Button
          onClick={() => {
            alert("You Clicked Me")
          }}
          type="button"
        >
          Click Me
        </Button>
      </Card>
      <Card title="test card" gridArea="b">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        nihil minus sed dignissimos sapiente voluptatem vel modi, nam nemo
        perferendis quidem voluptate doloribus debitis dolorum adipisci numquam,
        porro, aliquid amet?
      </Card>
      <Card title="another one" gridArea="c">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        nihil minus sed dignissimos sapiente voluptatem vel modi, nam nemo
        perferendis quidem voluptate doloribus debitis dolorum adipisci numquam,
        porro, aliquid amet?
      </Card>
      <Card title="another one" gridArea="d">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        nihil minus sed dignissimos sapiente voluptatem vel modi, nam nemo
        perferendis quidem voluptate doloribus debitis dolorum adipisci numquam,
        porro, aliquid amet?
      </Card>
    </Content>
  </Layout>
)

export default IndexPage
