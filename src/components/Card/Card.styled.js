import styled from "@emotion/styled"
import { animated } from "react-spring"

export const CardWrappper = styled(animated.div)`
  margin: ${props => props.theme.units.gutter};
  background-color: ${props => props.theme.color.altBackground};
  border-radius: 4px;
  padding: 1.5rem;
`
