import styled from "@emotion/styled"
import { animated } from "react-spring"

export const Container = styled(animated.div)`
  position: fixed;
  height: 8rem;
  width: 8rem;
  font-size: 7rem;
  z-index: ${props => props.theme.layers.top};
`

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`
