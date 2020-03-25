import styled from "@emotion/styled"
import { animated } from "react-spring"

export const StyledFooter = styled.footer`
  min-height: 10rem;
  width: 100%;
  background-color: ${props => props.theme.color.darkGray};
  color: ${props => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledSocialList = styled.ul`
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`

export const SocialLink = styled.a`
  display: flex;
  padding: 0.25rem;
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
