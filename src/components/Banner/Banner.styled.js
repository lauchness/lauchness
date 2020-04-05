import styled from "@emotion/styled"

import { StyledHeading, PageHeading } from "../Typography"
import { mediaQuery } from "../../utilities/style"

export const StyledBanner = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  background: ${props => props.theme.color.brand1};
  color: ${props => props.theme.color.white};

  & button {
    display: block;
    margin-top: 1rem;
  }

  ${mediaQuery()["medium"]} {
    flex-direction: row-reverse;

    & ${StyledHeading} {
      padding-right: 2rem;
    }

    & ${PageHeading} {
      width: initial;
      margin: 1rem;
    }
  }
`
