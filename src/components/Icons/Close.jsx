import React from "react"

const Close = props => {
  const { fill } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs />
      <path
        fill={fill ? fill : "#fff"}
        fill-rule="evenodd"
        d="M18.717 6.697l-1.414-1.414L12 10.586 6.697 5.283 5.283 6.697 10.586 12l-5.303 5.303 1.414 1.414L12 13.414l5.303 5.303 1.414-1.414L13.414 12z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

export default Close
