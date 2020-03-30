import React from "react"
import Img from "gatsby-image"
import { useTheme } from "emotion-theming"
import { css, jsx } from "@emotion/core"
import { useSpring } from "react-spring"

import { CardWrappper, CardImageWrapper } from "./Card.styled"

const Card = ({ children, title, gridArea, asLink, banner }) => {
  const {
    color: { buttonHover, white, outline },
  } = useTheme()
  const [hoverProps, setHover] = useSpring(() => ({
    transform: "scale(1)",
  }))

  const Wrapper = CardWrappper(asLink)
  const linkStyle = asLink
    ? css`
        &:hover {
          outline: none;
          background-color: ${buttonHover};
          color: ${white};
        }

        &:focus {
          outline-color: ${outline};
          outline-offset: -2px;
          outline-style: auto;
          outline-width: 5px;
        }
      `
    : css``

  return (
    <Wrapper
      to={asLink}
      css={linkStyle}
      style={{ gridArea, ...hoverProps }}
      onMouseEnter={() =>
        asLink &&
        setHover({
          transform: "scale(1.05)",
        })
      }
      onMouseLeave={() =>
        asLink &&
        setHover({
          transform: "scale(1)",
        })
      }
    >
      {title && <h2>{title}</h2>}
      {banner && (
        <CardImageWrapper>
          <Img fluid={banner.childImageSharp.fluid} />
        </CardImageWrapper>
      )}
      {children}
    </Wrapper>
  )
}

export default Card
