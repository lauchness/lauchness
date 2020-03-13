import styled from "@emotion/styled"
import { Link } from "gatsby"
import { animated } from "react-spring"

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: ${props => props.theme.color.white};
  text-decoration: none;
`

export const StyledButton = styled.button`
  height: 3rem;
  width: 3rem;
  border: none;
  background-color: transparent;
`
export const Wrapper = styled.div`
  position: sticky;
  z-index: ${props => props.theme.layers.top};
  margin-bottom: 1.5rem;
  height: 4rem;
`

export const StyledHeader = styled.header`
  position: absolute;
  z-index: ${props => props.theme.layers.top};
  background: ${props => props.theme.color.purple};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    margin: 0;
  }
`

export const StyledNav = styled(animated.nav)`
  position: absolute;
  top: 100%;
  background: ${props => props.theme.color.purple};
  width: 100%;

  & ul {
    display: flex;
    flex-direction: column;
  }
`
