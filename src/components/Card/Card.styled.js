import styled from "@emotion/styled"
import { animated } from "react-spring"

export const CardWrappper = styled(animated.div)`
  margin: 1rem;
  background-color: ${props => props.theme.color.altBackground};
  border-radius: 4px;
  padding: 1.5rem;
`
