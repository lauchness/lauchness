import styled from "@emotion/styled"
import { Link } from "gatsby"
import { animated } from "react-spring"

import { StyledButton } from "../Button/Button.styled"

export const CardWrappper = asLink => styled(
  asLink ? animated(Link) : animated.div
)`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.units.gutter};
  background-color: ${props => props.theme.color.altBackground};
  border-radius: 4px;
  padding: 1.5rem;
  text-decoration: none;
  color: ${props => props.theme.color.copy};

  & ${StyledButton} {
    max-width: 8rem;
  }
`

export const CardImageWrapper = styled.div`
  width: 100%;
  max-height: 200px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  object-fit: scale-down;
  margin-bottom: ${props => props.theme.units.gutter};
`
