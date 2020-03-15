import React from "react";

import { CardWrappper } from './Card.styled'

const Card = props => {
  const { copy, title } = props
  return (
    <CardWrappper>
      <h2>{title}</h2>
      <p>{copy}</p>
    </CardWrappper>
  )
};

export default Card;