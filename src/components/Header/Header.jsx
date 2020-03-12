import PropTypes from "prop-types"
import React from "react"

import { StyledHeader, StyledLink } from "./Header.styled"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
