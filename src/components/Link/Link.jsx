import React from "react";
import { StyledLink } from './Link.styled'

const Link = ({children, to, ...rest}) => {
  return (
    <StyledLink to={to} {...rest}>{children}</StyledLink>
  );
};

export default Link;