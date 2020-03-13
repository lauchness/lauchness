import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTheme } from "emotion-theming"
import { useSpring } from "react-spring"

import {
  Wrapper,
  StyledHeader,
  StyledLink,
  StyledButton,
  StyledNav,
} from "./Header.styled"
import { Close, Hamburger, Moon, Sun } from "../Icons"

const Header = ({ siteTitle, darkMode, setDarkMode }) => {
  const {
    color: { white },
  } = useTheme()

  const [menuOpen, setMenuOpen] = useState(false)
  const menuTabIndex = menuOpen ? 0 : -1

  const navProps = useSpring({
    transform: `translate3d(0,${menuOpen ? "0" : "-100%"},0)`,
  })

  return (
    <Wrapper>
      <StyledHeader>
        <h1>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </h1>
        <StyledButton type="button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun fill={white} /> : <Moon fill={white} />}
        </StyledButton>
        <StyledButton type="button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <Close fill={white} /> : <Hamburger fill={white} />}
        </StyledButton>
      </StyledHeader>
      <StyledNav
        menuOpen={menuOpen}
        ariaHidden={!menuOpen}
        style={{ ...navProps }}
      >
        <ul>
          <h2>
            <StyledLink to="/blog" tabIndex={menuTabIndex}>
              Blog
            </StyledLink>
          </h2>
          <h2>
            <StyledLink to="/fun" tabIndex={menuTabIndex}>
              Fun Stuff
            </StyledLink>
          </h2>
          <h2>
            <StyledLink to="/music" tabIndex={menuTabIndex}>
              Music
            </StyledLink>
          </h2>
        </ul>
      </StyledNav>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
