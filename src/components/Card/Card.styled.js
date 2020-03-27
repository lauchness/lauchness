import styled from "@emotion/styled"
import { Link } from "gatsby"
import { animated } from "react-spring"

export const CardWrappper = asLink => styled(
  asLink ? animated(Link) : animated.div
)`
  margin: ${props => props.theme.units.gutter};
  background-color: ${props => props.theme.color.altBackground};
  border-radius: 4px;
  padding: 1.5rem;
  text-decoration: none;
  color: ${props => props.theme.color.copy};
`
