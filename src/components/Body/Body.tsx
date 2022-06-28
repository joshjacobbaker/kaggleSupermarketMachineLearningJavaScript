import React from "react"
import * as vl from "vega-lite-api"

import BodyStyled from "./BodyStyled"

const Body = ({ children }) => {
  console.log(vl)
  return <BodyStyled>Body {children}</BodyStyled>
}

export default Body
