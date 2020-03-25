import React from "react"

const Hamburger = props => {
  const { fill } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs />
      <path
        fill={fill ? fill : "currentColor"}
        d="M6 15h12a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1a1 1 0 011-1zm-1-4v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-1-1H6a1 1 0 00-1 1zm0-5v1a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6a1 1 0 00-1 1z"
      />
    </svg>
  )
}

export default Hamburger
