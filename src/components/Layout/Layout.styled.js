import styled from "@emotion/styled"
import { mediaQuery } from "../../utilities/style"

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const StyledNoScript = styled.noscript`
  position: fixed;
  top: 5rem;
  left: 1rem;
  right: 1rem;
  max-width: 500px;
  color: black;
  padding: ${props => props.theme.units.getGutter()};
  background-color: ${props => props.theme.color.warning};
  border-radius: 1rem;
  z-index: ${props => props.theme.layers.top};
  border: 5px solid red;
`

export const GridContainer = styled.div`
  display: grid;
  ${mediaQuery()["small"]} {
    grid-template-columns: repeat(2, 50%);
  }
  ${mediaQuery()["large"]} {
    grid-template-columns: repeat(3, 33%);
  }
`
