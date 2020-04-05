import React from "react"
import PropTypes from 'prop-types'
import Img from "gatsby-image"

import { ImageWrapper } from "./image.styled"

const Image = ({childImageSharp, round, maxWidth}) => {
  return (
    <ImageWrapper round={round} maxWidth={maxWidth}>
      <Img {...childImageSharp} />
    </ImageWrapper>
  )
}

Image.defaultProps = {
  round: false,
  maxWidth: 0
}

Image.propTypes = {
  childImageSharp: PropTypes.shape({}).isRequired,
  round: PropTypes.bool,
  maxWidth: PropTypes.number
}

export default Image
