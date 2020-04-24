import styled from "@emotion/styled"

export const StyledDiv = styled.div`
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  margin-top: ${({ theme }) => theme.units.getGutter(4)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.units.getGutter(8)};
  padding: 0 ${props => props.theme.units.getGutter(2)};
`
