/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import Header from "../Header"
import { ContentWrapper } from "./Layout.styled"
import { globalCss } from "./GlobalCss"
import getTheme from "./theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [darkMode, setDarkMode] = useState(true)
  const theme = getTheme(darkMode)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalCss(theme)} />
        <Header
          siteTitle={data.site.siteMetadata.title}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <ContentWrapper>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}, Lauchness</footer>
        </ContentWrapper>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
