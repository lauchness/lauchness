import styled from "@emotion/styled"

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: transparent;
  padding: 0.1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

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

  & svg {
    min-height: 3rem;
    min-width: 3rem;
  }
`
