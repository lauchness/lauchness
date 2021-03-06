import React from "react"
import { animated, useSpring } from "react-spring"

const Sun = ({ fill, bounce }) => {
  const color = fill ? fill : "currentColor"
  const animateProps = useSpring({
    from: { transform: `scale(${bounce ? "0" : "1"})` },
    to: { transform: "scale(1)" },
  })

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="3 2 18 18"
      style={{ ...animateProps }}
    >
      <defs />
      <path
        fill={color}
        d="M18.1 5.1c0 .3-.1.6-.3.9l-1.4 1.4-.9-.8 2.2-2.2c.3.1.4.4.4.7zm-.5 5.3h3.2c0 .3-.1.6-.4.9s-.5.4-.8.4h-2v-1.3zm-6.2-5V2.2c.3 0 .6.1.9.4s.4.5.4.8v2h-1.3zm6.4 11.7c-.3 0-.6-.1-.8-.3l-1.4-1.4.8-.8 2.2 2.2c-.2.2-.5.3-.8.3zM6.2 4.9c.3 0 .6.1.8.3l1.4 1.4-.8.9-2.2-2.3c.2-.2.5-.3.8-.3zm5.2 11.7h1.2v3.2c-.3 0-.6-.1-.9-.4s-.4-.5-.4-.8l.1-2zm-7-6.2h2v1.2H3.2c0-.3.1-.6.4-.9s.5-.3.8-.3zM6.2 16l1.4-1.4.8.8-2.2 2.2c-.2-.2-.3-.5-.3-.8s.1-.6.3-.8z"
      />
      <circle fill={color} cx="12" cy="11" r="4" />
    </animated.svg>
  )
}

export default Sun
