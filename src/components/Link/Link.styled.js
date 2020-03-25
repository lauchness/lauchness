import styled from "@emotion/styled"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  padding: 0.5rem;
  font-weight: bold;
  color: ${props => props.theme.color.white};
  text-decoration: none;
  border: none;
  border-radius: ${props => props.theme.units.borderRadius};

  &:hover {
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline-color: ${props => props.theme.color.outline};
    outline-offset: -2px;
    outline-style: auto;
    outline-width: 5px;
  }

  &:active {
    transform: translate3d(0, 2px, 0);
    box-shadow: none;
  }
`
