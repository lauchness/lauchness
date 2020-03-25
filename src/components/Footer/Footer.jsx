import React from "react"
import { useTheme } from "emotion-theming"
import PropTypes from "prop-types"

import { StyledFooter, StyledSocialList, SocialLink } from "./Footer.styled"
import { GitHub, Twitter, LinkedIn } from "../Icons"
import Button from "../Button"

const Footer = () => {
  const {
    color: { twitterBlue, linkedInBlue, gitHubWhite },
  } = useTheme()

  return (
    <StyledFooter>
      <StyledSocialList>
        <li>
          <SocialLink hover={gitHubWhite} href="https://github.com/lauchness/">
            <GitHub />
          </SocialLink>
        </li>
        <li>
          <SocialLink hover={twitterBlue} href="https://twitter.com/lauchness1">
            <Twitter />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            hover={linkedInBlue}
            href="https://www.linkedin.com/in/lauchlanchisholm/"
          >
            <LinkedIn />
          </SocialLink>
        </li>
      </StyledSocialList>
      © {new Date().getFullYear()}, Lauchlan Chisholm
    </StyledFooter>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
