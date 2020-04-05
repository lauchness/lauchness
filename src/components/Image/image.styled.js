import styled from "@emotion/styled"

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
  border-radius: ${({round, theme}) => round ? '50%' : theme.units.borderRadius};
  overflow: hidden;
`
