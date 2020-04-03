import styled from "@emotion/styled"
import { mediaQuery } from "../../utilities/style"

export const StyledFooter = styled.footer`
  width: 100%;
  background: ${props => props.theme.color.brand2};
  color: ${props => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 25px 0;

    ${mediaQuery()["medium"]} {
      margin: 50px 0;
    }
  }
`

export const StyledSocialList = styled.ul`
  padding: 0;
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`

export const SocialLink = styled.a`
  display: flex;
  padding: 0.25rem;
  background-color: transparent;
  color: ${props => props.theme.color.lightGray};
  & svg {
    min-height: 3rem;
    min-width: 3rem;
  }

  &:hover {
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    color: ${props => props.hover};
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
