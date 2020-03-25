import styled from "@emotion/styled"
import { animated } from "react-spring"

const linearBackground = props => `linear-gradient(.25turn, ${props.theme.color.black}, 5%, ${props.theme.color.darkGray})`

export const Wrapper = styled.div`
  position: sticky;
  z-index: ${props => props.theme.layers.top};
  margin: 0;
  height: 4rem;
`

export const StyledHeader = styled.header`
  position: absolute;
  z-index: ${props => props.theme.layers.top};
  background: ${props => linearBackground(props)};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    margin: 0 0.5rem;
  }
`

export const StyledNav = styled(animated.nav)`
  position: absolute;
  top: 100%;
  background: ${props => linearBackground(props)};
  width: 100%;

  & ul {
    display: flex;
    flex-direction: column;
  }
`
