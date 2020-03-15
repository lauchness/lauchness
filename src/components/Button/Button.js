import React from "react";

import {StyledButton} from './Button.styled'

const Button = props => {
  const { onClick, children, type } = props
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;