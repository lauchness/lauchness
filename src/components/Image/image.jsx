import React from "react"
import PropTypes from 'prop-types'
import Img from "gatsby-image"

import { ImageWrapper } from "./image.styled"

const Image = ({childImageSharp, round}) => {
  return (
    <ImageWrapper round={round}>
      <Img {...childImageSharp} />
    </ImageWrapper>
  )
}

Image.defaultProps = {
  round: false
}

Image.propTypes = {
  childImageSharp: PropTypes.shape({}).isRequired,
  round: PropTypes.bool
}

export default Image
