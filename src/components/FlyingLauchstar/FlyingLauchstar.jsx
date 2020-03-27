import React from "react"
import { useSpring } from "react-spring"

import Lauchstar from "../../images/poke-lauchness.png"
import { Container, StyledImg } from "./FlyingLauchstar.styled"

const FlyingLauchstar = () => {
  const props = useSpring({
    to: async (next, cancel) => {
      await next({
        left: "50%",
      })
      await next({
        top: "20%",
        transform: "rotateZ(360deg)",
      })
      await next({ top: "50%" })
      await next({ left: "100%" })
    },
    from: {
      left: "0%",
      top: "50%",
      transform: "rotateZ(0deg)",
    },
  })

  return (
    <Container style={props}>
      <StyledImg
        src={Lauchstar}
        alt="Lauchlan as a Character from Pokemeon Red/Blue"
      />
    </Container>
  )
}

export default FlyingLauchstar
