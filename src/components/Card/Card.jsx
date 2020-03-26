import React from "react"
import { useSpring } from "react-spring"

import { CardWrappper } from "./Card.styled"

const Card = ({ children, title, gridArea }) => {
  const [hoverProps, setHover] = useSpring(() => ({
    transform: "scale(1)",
  }))

  return (
    <CardWrappper
      style={{ gridArea, ...hoverProps }}
      onMouseEnter={() =>
        setHover({
          transform: "scale(1.05)",
        })
      }
      onMouseLeave={() =>
        setHover({
          transform: "scale(1)",
        })
      }
    >
      {title && <h2>{title}</h2>}
      {children}
    </CardWrappper>
  )
}

export default Card
