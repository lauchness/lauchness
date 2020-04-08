import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { useDarkmode } from "../../utilities/hooks"
import Header from "../Header"
import Footer from "../Footer"
import { ContentWrapper, StyledNoScript } from "./Layout.styled"
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

  const [darkMode, setDarkMode] = useDarkmode()
  const theme = getTheme(darkMode)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalCss(theme)} />
        <StyledNoScript>
          <p>You have JavaScript disabled in your browser.</p>
          <p>
            This site relies on JavaScript for it's functionality and will not
            behave optimally until{" "}
            <a
              href="https://www.google.com/search?q=enable+javascript&oq=enable+javascript"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript has been enabled
            </a>
            .
          </p>
        </StyledNoScript>
        <Header
          siteTitle={data.site.siteMetadata.title}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <ContentWrapper>
          <main>{children}</main>
        </ContentWrapper>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
