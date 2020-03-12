import styled from "@emotion/styled"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  background: ${props => props.theme.color.purple};
  margin-bottom: 1.5rem;
`

const Wrapper = styled.div``

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: ${props => props.theme.color.white};
`
