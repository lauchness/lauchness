import styled from "@emotion/styled"

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.color.button};
  padding: ${props => props.theme.units.getGutter()};
  cursor: pointer;
  color: ${props => props.theme.color.white};
  font-size: 1rem;

  &:hover {
    outline: none;
    background-color: ${props => props.theme.color.buttonHover};
  }

  &:focus {
    outline-color: ${props => props.theme.color.outline};
    outline-offset: -2px;
    outline-style: auto;
    outline-width: 5px;
  }

  &:active {
    transform: translate3d(0, 2px, 0);
  }

  &:disabled {
    cursor: wait;
    background-color: ${props => props.theme.color.buttonDisabled};
  }

  & svg {
    min-height: 2rem;
    min-width: 2rem;
  }
`
