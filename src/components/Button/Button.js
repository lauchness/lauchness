import React from "react"

import { StyledButton } from "./Button.styled"

const Button = ({ onClick, children, type, ...rest }) => {
  return (
    <StyledButton onClick={onClick} type={type} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
