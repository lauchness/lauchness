import styled from "@emotion/styled"
import { animated } from "react-spring"

import { StyledLink } from "../Link/Link.styled"
import { mediaQuery } from "../../utilities/style"

export const Wrapper = styled.div`
  position: sticky;

  z-index: ${props => props.theme.layers.top};
  margin: 0;
  height: 4rem;
`

export const StyledHeader = styled.header`
  position: absolute;
  z-index: ${props => props.theme.layers.top};
  background: ${props => props.theme.color.brand2};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  & h1 {
    margin: 0 ${props => props.theme.units.getGutter()};
    max-width: 50%;

    ${mediaQuery(true)["small"]} {
      font-size: 1.7rem;
    }
  }

  & ${StyledLink} {
    color: ${props => props.theme.color.white};
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 0.25rem;

  & button {
    margin: 0 0.25rem;

    & svg {
      width: 2rem;
    }
  }
`

export const StyledNav = styled(animated.nav)`
  position: absolute;
  top: 100%;
  background: ${props => props.theme.color.brand2};
  width: 100%;

  & ul {
    display: flex;
    flex-direction: column;
  }
`
