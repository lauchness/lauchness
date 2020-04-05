import React from "react"
import PropTypes from 'prop-types'

import { StyledDiv } from "./Content.styled"

const Content = ({ children, maxWidth }) => {
  return <StyledDiv maxWidth={maxWidth}>{children}</StyledDiv>
}

Content.defaultProps = {
  maxWidth: 900
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number
}

export default Content
