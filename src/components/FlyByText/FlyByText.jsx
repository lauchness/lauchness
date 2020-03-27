import React from "react"
import { useSpring } from "react-spring"

import { getRandomInt } from "../../utilities/numbers"
import { Container } from "./FlyByText.styled"

import getTheme from "../Layout/theme"
const { color } = getTheme(false)
const colors = Object.values(color)

const FlyByText = ({ text }) => {
  const textColor = colors[getRandomInt(0, colors.length - 1)]

  const springProps = useSpring({
    from: { transform: "translate3d(-100vw,0,0)" },
    to: { transform: "translate3d(100vw,0,0)" },
  })

  return (
    <Container style={{ color: textColor, ...springProps }}>{text}</Container>
  )
}

export default FlyByText
