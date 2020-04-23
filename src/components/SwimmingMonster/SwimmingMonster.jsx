import React from "react"
import { useSpring } from "react-spring"

import { LauchnessMonster } from "../Icons"
import { Container } from "./SwimmingMonster.styled"

const SwimmingMonster = () => {
  const props = useSpring({
    to: async (next, cancel) => {
      await next({
        left: "10%",
      })
      await next({
        left: "25%",
      })
      await next({
        left: "45%",
      })
      await next({
        left: "60%",
      })
      await next({
        left: "80%",
      })
      await next({
        left: "95%",
      })
      await next({
        left: "100%",
      })
    },
    from: {
      left: "-50%",
      top: "50%",
    },
  })

  return (
    <Container style={props}>
      <LauchnessMonster />
    </Container>
  )
}

export default SwimmingMonster
