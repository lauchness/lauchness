import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTheme } from "emotion-theming"
import { useSpring } from "react-spring"

import {
  Wrapper,
  StyledHeader,
  StyledNav,
} from "./Header.styled"
import Link from '../Link'
import { Close, Hamburger, Moon, Sun } from "../Icons"
import Button from '../Button'

const Header = ({ siteTitle, darkMode, setDarkMode }) => {
  const {
    color: { lightGray },
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
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div>
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
        </div>
      </StyledHeader>
      <StyledNav
        aria-hidden={!menuOpen}
        style={{ ...navProps }}
      >
        <ul>
          <h2>
            <Link to="/blog" tabIndex={menuTabIndex}>
              Blog
            </Link>
          </h2>
          <h2>
            <Link to="/fun" tabIndex={menuTabIndex}>
              Fun Stuff
            </Link>
          </h2>
          <h2>
            <Link to="/music" tabIndex={menuTabIndex}>
              Music
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
