import React from "react"
import PropTypes from "prop-types"

import { StyledFooter } from "./Footer.styled"
import { Close, Hamburger, Moon, Sun } from "../Icons"
import Button from "../Button"

const Footer = () => {
  return <StyledFooter>© {new Date().getFullYear()}, Lauchness</StyledFooter>
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
