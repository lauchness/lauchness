import styled from "@emotion/styled"
import { animated } from "react-spring"

export const Container = styled(animated.div)`
  position: fixed;
  width: 16rem;
  font-size: 7rem;
  z-index: ${props => props.theme.layers.top};
`
