import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTheme } from "emotion-theming"
import { useSpring } from "react-spring"

import {
  Wrapper,
  StyledHeader,
  StyledNav,
  ButtonWrapper,
} from "./Header.styled"
import Link from "../Link"
import { Close, Hamburger, Moon, Sun, LauchnessLogo } from "../Icons"
import { StyledHeading } from "../Typography"
import Button from "../Button"

const Header = ({ siteTitle, darkMode, setDarkMode }) => {
  const {
    color: { lightGray },
  } = useTheme()

  const [menuOpen, setMenuOpen] = useState(false)
  const menuTabIndex = menuOpen ? 0 : -1

  const navProps = useSpring({
    transform: `translate3d(0,${menuOpen ? "0" : "-100%"},0)`,
    opacity: menuOpen ? 1 : 0
  })

  return (
    <Wrapper>
      <StyledHeader>
        <Link to="/">
          <LauchnessLogo />
          <StyledHeading style={{ margin: 0 }}>{siteTitle}</StyledHeading>
        </Link>
        <ButtonWrapper>
          <Button type="button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <Moon fill={lightGray} bounce={true} />
            ) : (
              <Sun fill={lightGray} bounce={true} />
            )}
          </Button>
          <Button type="button" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <Close fill={lightGray} />
            ) : (
              <Hamburger fill={lightGray} />
            )}
          </Button>
        </ButtonWrapper>
      </StyledHeader>
      <StyledNav aria-hidden={!menuOpen} style={{ ...navProps }}>
        <ul>
          <h2>
            <Link to="/development" tabIndex={menuTabIndex}>
              Development Blog
            </Link>
          </h2>
          <h2>
            <Link to="/music" tabIndex={menuTabIndex}>
              Music
            </Link>
          </h2>
          <h2>
            <Link to="/about" tabIndex={menuTabIndex}>
              About Me
            </Link>
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
