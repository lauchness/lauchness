import styled from '@emotion/styled'

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: transparent;
  padding: 0.1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  box-shadow: 2px 2px rgba(0,0,0,0.2);

  &:hover {
    outline: none;
    background-color: rgba(0,0,0,0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.5);
  }

  &:active {
    transform: translate3d(0,2px,0);
    box-shadow: none;
  }

  & svg {
    min-height: 3rem;
    min-width: 3rem;
  }
`