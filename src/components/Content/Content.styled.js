import styled from "@emotion/styled"

export const StyledDiv = styled.div`
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  margin: 0 auto;
  padding: 0 ${props => props.theme.units.getGutter(2)};
`
