import styled from "@emotion/styled"
import { Link } from "gatsby"
import { animated } from "react-spring"

import { StyledButton } from "../Button/Button.styled"

export const CardWrappper = asLink => styled(
  asLink ? animated(Link) : animated.div
)`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.units.getGutter()};
  background-color: ${props => props.theme.color.altBackground};
  border-radius: 4px;
  padding: 1.5rem;
  text-decoration: none;
  color: ${props => props.theme.color.copy};

  & ${StyledButton} {
    max-width: 8rem;
  }
`

export const StyledTagWrapper = styled.div`
  margin-top: ${({ theme }) => theme.units.getGutter()};
  display: flex;
  flex-wrap: wrap;
`

export const StyledTag = styled.h4`
  background-color: ${({ theme }) => theme.color.copy};
  color: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.units.borderRadius};
  padding: ${({ theme }) => theme.units.getGutter(0.5)};
  margin: 0;
  margin-top: ${({ theme }) => theme.units.getGutter(0.5)};
  margin-right: ${({ theme }) => theme.units.getGutter(0.5)};
  width: max-content;
  flex: 0 0 auto;
  text-transform: capitalize;
`
