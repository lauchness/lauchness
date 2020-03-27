import styled from "@emotion/styled"
import { animated } from "react-spring"

export const Container = styled(animated.div)`
  position: fixed;
  top: 50%;
  font-size: 7rem;
  z-index: ${props => props.theme.layers.top};
`
