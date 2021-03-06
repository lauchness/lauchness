import React from "react"
import { animated, useSpring } from "react-spring"

const Moon = ({ fill, bounce }) => {
  const color = fill ? fill : "currentColor"
  const animateProps = useSpring({
    from: { transform: `scale(${bounce ? "0" : "1"})` },
    to: { transform: "scale(1)" },
  })
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="7 7 36 36"
      style={{ ...animateProps }}
    >
      <defs />
      <circle
        cx="25"
        cy="25"
        r="16"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      <path fill={color} d="M25 9a16 16 0 010 32v-1.5a18 18 0 010-29V9z" />
    </animated.svg>
  )
}

export default Moon
